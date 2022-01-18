import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middlware(req) {
    if (req.nexturl.pathname === '/') {
        const session = await getToken({
            req,
            secret: process.env.JWT_SECRET,
            secureCookie: process.env.NODE_ENV === 'production'
        });
        //you can check for anyproperty on the session object
        // like role=== 'admin' or name === 'john doe'

        if (!session) return NextResponse.redirect("/home");
    }
}
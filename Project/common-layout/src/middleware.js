import { NextResponse } from "next/server";
// Note:--
// ye file src m banega not ki app me

export function middleware(request) {
    // agr login page alwa koi karne kosis karenge to ye redireect kr dega humko login page.
//   if (request.nextUrl.pathname !== "/login") {
//     return NextResponse.redirect(new URL("/login", request.url));
    //   }
    
    //  is ka matlab betow matcher me jo bhi url woh redirect ho gayega login page pe
    //  return NextResponse.redirect(new URL("/login", request.url));

     
    // is code specic routes ko hum target kr sakte h 
    //agr about pe click kiya to aap ko login pr redirect kr dega
    //  if (request.nextUrl.pathname.startsWith("/studentlist/shaikh")) {
    //    return NextResponse.rewrite(new URL("/login", request.url));
    //  }
}

// export const config = {
//   matcher: ["/about/:path*", "/signup/:path*"],
// };

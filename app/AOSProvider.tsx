"use client";

import { useEffect } from "react";
import Script from "next/script";


export default function AOSProvider() {
return (
      <Script
      src="https://unpkg.com/aos@2.3.1/dist/aos.js"
      strategy="afterInteractive"
      onLoad={()=>{
        // @ts-ignore
        AOS.init({
          duration: 800,
          once: true
        });
      }}
      />  
);
}

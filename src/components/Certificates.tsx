"use client";
import Image from "next/image";

export  function Certificates() {
  return (
    <section id="certificates" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Certificates</h2>
      <div className="flex justify-center">
        <Image src="/images/certificate.jpg" alt="Certificate" width={400} height={300} />
      </div>
    </section>
  );
}
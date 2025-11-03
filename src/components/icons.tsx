import Image from "next/image";
import React from "react";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const SchoolLogo: React.FC<LogoProps> = ({ width = 60, height = 60, className }) => {
  return (
    <Image
      src="/images/school_logo.jpg"   
      alt="School Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
};

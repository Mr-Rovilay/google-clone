import HomeHeader from "@/components/Home";
import Search from "@/components/Search";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/The%20Secret%20History%20of%20the%20Google%20Logo-1.jpeg?width=504&name=The%20Secret%20History%20of%20the%20Google%20Logo-1.jpeg"
          alt="google logo"
          width={300}
          height={100}
        />
        <Search />
      </div>
    </div>
  );
};

export default Home;

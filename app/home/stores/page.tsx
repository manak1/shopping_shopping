import Link from "next/link";
import React from "react";

const Stores = () => {
  return (
    <div className="px-4 py-4">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-lg">店舗一覧</h2>
        <ul className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item}>
              <Link href={`/home/stores/${item}`}>
                <div className="flex gap-2 flex-col">
                  <img
                    src="https://cosmospc-recruit.jp/rhp_root/static_contents/images/001/000765_177293.jpg"
                    alt=""
                  />
                  <p className="text-sm">コスモス大庄西町店</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stores;

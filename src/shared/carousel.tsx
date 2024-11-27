"use client";
import Image from "next/image";
import dollar from "../assets/S.svg";
import arrowDown from "../assets/arrowDown.svg";
import chevronLeft from "../assets/chevronLeft.svg";
import chevronRight from "../assets/chevronRight.svg";
import { useState } from "react";

interface Props {
  data: { url: string; nickname: string }[];
}

export default function Carousel({ data }: Props) {
  const [active, setActive] = useState(1);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setActive(() => Number(event.target.value));
  }

  function onPrevious() {
    setActive(() => (active === 1 ? 3 : active - 1));
  }

  function onNext() {
    setActive(() => (active === 3 ? 1 : active + 1));
  }
  return (
    <div className="relative">
      <Image
        src={chevronLeft}
        alt={chevronLeft}
        className="absolute top-52 left-[-65px] md-max:left-[25px] cursor-pointer"
        onClick={onPrevious}
      />
      <div className="carousel md-max:p-0">
        <div className="container">
          <input
            type="radio"
            name="slider"
            id="item-1"
            value={1}
            checked={1 === active}
            onChange={onChange}
          />
          <input
            type="radio"
            name="slider"
            id="item-2"
            value={2}
            checked={2 === active}
            onChange={onChange}
          />
          <input
            type="radio"
            name="slider"
            id="item-3"
            value={3}
            checked={3 === active}
            onChange={onChange}
          />
          <div className="cards">
            {data?.map((item, index) => (
              <label
                className="card"
                htmlFor={`item-${index + 1}`}
                id={`song-${index + 1}`}
                key={index}
              >
                {active === index + 1 ? (
                  <button className="absolute top-[-50] left-36 md-max:left-32 transform -translate-x-1/2 -translate-y-1/2 w-[150px] bg-tooltipCorausel rounded-[8px] h-[39px] text-[18px] font-extrabold text-green">
                    <div className="w-full flex items-center justify-center">
                      <div className="bg-opacityGreen w-[26px] h-[26px] flex items-center justify-center rounded-full mr-2">
                        <Image src={dollar} alt={dollar} />
                      </div>
                      월 {index + 1}00만원
                    </div>
                    <div className="relative">
                      <Image
                        src={arrowDown}
                        alt={arrowDown}
                        className="absolute bottom-[-22] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                  </button>
                ) : null}
                <div
                  className={`w-[292px] md-max:w-[250px] rounded-[12px] p-10 md-max:p-2 flex flex-col items-center ${
                    index === 0
                      ? "bg-carouselExclude shadow-cardExclude"
                      : index === 1
                      ? "bg-carousel shadow-card bg-white"
                      : "bg-carouselExclude shadow-cardExclude"
                  } ${active === index + 1 ? "h-[385px]" : "h-[400px]"}`}
                >
                  <div className="w-[120px] h-[120px] relative">
                    <div className="w-[120px] h-[120px] rounded-full relative mb-6 overflow-hidden">
                      <Image
                        fill
                        src={item?.url}
                        alt={item?.url}
                        className="absolute w-full h-full"
                      />
                    </div>
                    <img
                      src="https://s3-alpha-sig.figma.com/img/fe4c/5714/071ca88d9d6e607dff42c41cfe41a595?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=laqW0qBP5vX4gPuvFDsQhY4dbVvjB2mLmjt3tV5f5bqXkCxls3rb8VsgoC1luIsuD9jjPd~gGHlyZoeLidNFTg~JA6JiJ1L3DzTXo5LZtQryKavh~L6~hbVH4j~IlY-3zdy9tTU6Ijj0cqO4CQb7OorGZINjC6h~USD4vbZ-~MuLk-cyhfbKgfXbEeZ3yFPXPTGM6bRcVTMr5cTF17-pNhBJCf8WTKxUPuId0MYP9srGP4pC2~7Fg5hcC65~q9EUhpcSda93sZ8qC~gMhI8kmRnv-00jf4ME-Co4KajnP-5jzStALL9pGfoRugf03TQzTRMaHS9SDsz2ODo8L8~NHw__"
                      alt=""
                      className="absolute bottom-2 right-0 w-[25px] rounded-[2px]"
                    />
                  </div>
                  <span className="block text-black text-[24px] font-extrabold">
                    {item.nickname.length >= 12
                      ? `${item.nickname.substring(0, 12)}...`
                      : item.nickname}
                  </span>
                  <span className="block text-purple text-[16px] font-extrabold">
                    마케팅 · 2y+
                  </span>
                  <div className="flex items-center justify-center flex-wrap mt-8 w-[230px]">
                    <div
                      className={`text-[16px] text-gray font-extrabold border py-1 px-3 rounded-[6px] m-[2px] ${
                        index === 1 ? "border-gray" : "border-cardExclude"
                      }`}
                    >
                      마케팅 콘텐츠 제작
                    </div>
                    <div
                      className={`text-[16px] text-gray font-extrabold border py-1 px-3 rounded-[6px] m-[2px] ${
                        index === 1 ? "border-gray" : "border-cardExclude"
                      }`}
                    >
                      인스타그램 관리
                    </div>
                    <div
                      className={`text-[16px] text-gray font-extrabold border py-1 px-3 rounded-[6px] m-[2px] ${
                        index === 1 ? "border-gray" : "border-cardExclude"
                      }`}
                    >
                      트위터 관리
                    </div>
                    <div
                      className={`text-[16px] text-gray font-extrabold border py-1 px-3 rounded-[6px] m-[2px] ${
                        index === 1 ? "border-gray" : "border-cardExclude"
                      }`}
                    >
                      블로그 글 작성
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
      <Image
        src={chevronRight}
        alt={chevronRight}
        className="absolute top-52 right-[-115px] md-max:right-[16px] cursor-pointer"
        onClick={onNext}
      />
    </div>
  );
}

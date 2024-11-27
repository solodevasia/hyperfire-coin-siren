"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Background from "../assets/background.png";
import logo from "../assets/logo.svg";
import chevronDown from "../assets/caret-down.svg";
import marketing from "../assets/icon-marketing.svg";
import image from "../assets/icon-image.svg";
import box from "../assets/icon-box.svg";
import star from "../assets/icon-target.svg";
import call from "../assets/icon-call.svg";
import arrowDown from "../assets/arrowDown.svg";
import Carousel from "@hyperfire/shared/carousel";
import hyperhire from "../assets/hyperhire.svg";
import code from "../assets/icon-code.svg";
import rightSquare from "../assets/rightSquare.svg";
import avatar from "../assets/icon-avatar.svg";
import kor from "../assets/KOR.svg";
import gear from "../assets/icon-gear.svg";
import chevronDownMobile from "../assets/chevronDownMobile.svg";
import check from "../assets/check.svg";

export default function Home() {
  const [items, setItems] = useState([]);

  function fetchParallel() {
    fetch("https://nfl-api-data.p.rapidapi.com/nfl-team-roster?id=22", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": "nfl-api-data.p.rapidapi.com",
        "x-rapidapi-key": "71decfec8emshe528f8adda10671p187472jsnd24120f1e151",
      },
    }).then(async (res) => {
      const data = await res.json();
      setItems(
        () =>
          data.athletes
            .map((item: any) => ({
              url: item.headshot.href,
              nickname: item.headshot.alt || "Anonymous",
            }))
            .reverse() as any
      );
    });
  }

  useEffect(() => {
    fetchParallel();
  }, []);
  console.log(items);
  return (
    <div>
      <div className="w-full h-[100vh] md-max:h-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 bg-rectangle w-full h-full">
          <div
            className="w-full h-full bg-cover opacity-[80%] mix-blend-color-burn"
            style={{
              backgroundImage: `url(${Background.src})`,
            }}
          ></div>
        </div>
        <div className="relative">
          <div className="flex items-center md-max:justify-start justify-around p-4">
            <Image src={logo} alt={logo} />
            <div className="md-max:hidden flex items-center justify-between text-white w-[262px]">
              <span className="text-[16px] font-bold mr-2 flex items-center">
                채용
                <Image src={chevronDown} alt={chevronDown} className="ml-1" />
              </span>
              <span className="text-[16px] font-bold">
                해외 개발자 활용 서비스
              </span>
            </div>
            <button className="md-max:hidden w-[104px] h-[36px] bg-white rounded-[8px] text-primary text-[16px] font-bold">
              문의하기
            </button>
          </div>
          <div className="flex justify-around md-max:justify-start flex-wrap pt-32 p-4 md-max:pt-24">
            <div className="relative">
              <button className="absolute top-[-60] left-0 w-[150px] bg-white md-max:bg-tooltipMobile md-max:text-white rounded-[8px] h-[39px] text-[18px] font-extrabold text-second">
                풀타임, 파트타임
                <div className="relative">
                  <Image
                    src={arrowDown}
                    alt={arrowDown}
                    className="md-max:hidden absolute bottom-[-15] left-0"
                  />
                  <Image
                    src={chevronDownMobile}
                    alt={chevronDownMobile}
                    className="md:hidden absolute bottom-[-15] left-0"
                  />
                </div>
              </button>
              <div className="md-max:hidden text-[48px] text-white font-bold leading-[60px]">
                <span className="block">최고의 실력을 가진</span>
                <span className="block">외국인 인재를 찾고 계신가요?</span>
              </div>
              <div className="md:hidden">
                <span className="block text-[36px] text-white font-extrabold">
                  최고의 실력을 가진
                </span>

                <span className="block text-[36px] text-white font-extrabold">
                  외국인 인재를 찾고
                </span>
                <span className="block text-[36px] text-white font-extrabold">
                  계신가요?
                </span>
              </div>
              <div className="text-white text-[24px] font-bold mt-4 md-max:w-[340px]">
                <span className="block md-max:inline md-max:mr-1">
                  법률 및 인사관리 부담없이
                </span>
                <span className="block md-max:inline">
                  1주일 이내에 원격으로 채용해보세요.
                </span>
              </div>
              <div className="md-max:hidden mt-6">
                <a
                  href=""
                  className="text-[18px] text-white font-bold underline"
                >
                  개발자가 필요하신가요?
                </a>
              </div>
              <div className="flex justify-between mt-16 md-max:hidden">
                <div className="relative after:content-[''] after:w-full after:h-[1px] after:bg-white after:absolute after:top-0 after:left-0 pt-3">
                  <span className="block text-white font-extrabold text-[18px]">
                    평균 월 120만원
                  </span>
                  <span className="block w-[160px] text-[16px] font-extrabold text-text">
                    임금을 해당 국가를 기준으로 계산합니다.
                  </span>
                </div>
                <div className="relative after:content-[''] after:w-full after:h-[1px] after:bg-white after:absolute after:top-0 after:left-0 pt-3">
                  <span className="block text-white font-extrabold text-[18px]">
                    최대 3회 인력교체
                  </span>
                  <span className="block w-[160px] text-[16px] font-extrabold text-text">
                    막상 채용해보니 맞지 않아도 걱정하지 마세요.
                  </span>
                </div>
                <div className="relative after:content-[''] after:w-full after:h-[1px] after:bg-white after:absolute after:top-0 after:left-0 pt-3">
                  <span className="block text-white font-extrabold text-[18px]">
                    평균 3일, 최대 10일
                  </span>
                  <span className="block w-[160px] text-[16px] font-extrabold text-text">
                    급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
                  </span>
                </div>
              </div>
            </div>
            <div className="relative w-60 md-max:w-full">
              <div className="absolute top-[-40] left-[-220px] md-max:relative md-max:pt-32 md-max:left-0 md-max:top-0 md-max:flex md-max:items-center md-max:justify-center md-max:pb-2 md-max:pt-20 md-max:pr-2">
                <Carousel data={items?.slice(2, 5)} />
              </div>
            </div>
            <div className="md:hidden grid grid-cols-2">
              <div className="flex items-center">
                <div className="flex items-center justify-center bg-checked p-1 rounded-[6px] m-2">
                  <Image src={check} alt={check} />
                </div>
                <span className="ml-2 text-white text-[16px] font-extrabold">
                  한국어 능력
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center bg-checked p-1 rounded-[6px] m-2">
                  <Image src={check} alt={check} />
                </div>
                <span className="ml-2 text-white text-[16px] font-extrabold">
                  업무 수행 능력
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center bg-checked p-1 rounded-[6px] m-2">
                  <Image src={check} alt={check} />
                </div>
                <span className="ml-2 text-white text-[16px] font-extrabold">
                  겸업 여부
                </span>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center bg-checked p-1 rounded-[6px] m-2">
                  <Image src={check} alt={check} />
                </div>
                <span className="ml-2 text-white text-[16px] font-extrabold">
                  평판 조회
                </span>
              </div>
            </div>
            <span className="md:hidden block underline text-yellow text-[16px] font-extrabold ml-2 mt-2 mb-10">
              개발자가 필요하신가요?
            </span>
          </div>
        </div>
        <div className="md-max:hidden flex flex-nowrap overflow-x-scroll whitespace-nowrap w-[1200px] absolute bottom-16 left-72">
          <button className="py-3 pl-3 pr-24  bg-whiteTransparent rounded-[12px] w-[332px] text-left flex items-center mr-4">
            <div className="mr-4 bg-whiteIcon p-2 rounded-[8px] w-[56px] h-[56px] flex items-center justify-center">
              <Image src={marketing} alt={marketing} className="flex-none" />
            </div>
            <span className="text-white text-[24px] font-extrabold">
              해외 마케팅
            </span>
          </button>
          <button className="py-3 pl-3 pr-24 bg-whiteTransparent rounded-[12px] text-left flex items-center mr-4">
            <div className="mr-4 bg-whiteIcon p-2 rounded-[8px] w-[56px] h-[56px] flex items-center justify-center">
              <Image src={image} alt={image} />
            </div>
            <span className="text-white text-[24px] font-extrabold">
              퍼블리셔
            </span>
          </button>
          <button className="py-3 pl-3 pr-24 bg-whiteTransparent rounded-[12px] w-[332px] text-left flex items-center mr-4">
            <div className="mr-4 bg-whiteIcon p-2 rounded-[8px] w-[56px] h-[56px] flex items-center justify-center">
              <Image src={box} alt={box} />
            </div>
            <span className="text-white text-[24px] font-extrabold">
              캐드원(제도사)
            </span>
          </button>
          <button className="py-3 pl-3 pr-24 bg-whiteTransparent rounded-[12px] w-[332px] text-left flex items-center mr-4">
            <div className="mr-4 bg-whiteIcon p-2 rounded-[8px] w-[56px] h-[56px] flex items-center justify-center">
              <Image src={star} alt={star} />
            </div>
            <span className="text-white text-[24px] font-extrabold">
              해외 세일즈
            </span>
          </button>
          <button className="py-3 pl-3 pr-24 bg-whiteTransparent rounded-[12px] text-left flex items-center mr-4">
            <div className="mr-4 bg-whiteIcon p-2 rounded-[8px] w-[56px] h-[56px] flex items-center justify-center">
              <Image src={call} alt={call} />
            </div>
            <span className="text-white text-[24px] font-extrabold">
              해외 CS
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly md-max:justify-start py-20 px-12 md-max:p-0">
        <div className="md-max:pt-16 md-max:pl-6 md-max:pb-2">
          <Image src={hyperhire} alt={hyperhire} />
          <div className="w-[247px] mt-4">
            <span className="text-[14px] font-extrabold text-black">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </span>
            <span className="block text-[13px] text-blackBold font-extrabold mt-4">
              010-0000-0000
            </span>
            <span className="block text-[13px] text-blackBold font-extrabold mt-2">
              aaaaa@naver.com
            </span>
          </div>
          <div className="md-max:hidden flex mt-10">
            <div>
              <span className="block text-[12px] text-footer font-extrabold">
                상호명
              </span>
              <span className="block text-[13px] font-extrabold text-footer">
                하이퍼하이어
              </span>

              <span className="block text-[13px] font-extrabold text-footer">
                Hyperhire India Private Limited
              </span>
            </div>
            <div className="px-4">
              <span className="block text-[12px] text-footer font-extrabold">
                대표 CEO
              </span>
              <span className="block text-[13px] font-extrabold text-footer">
                김주현
              </span>

              <span className="block text-[13px] font-extrabold text-footer">
                Juhyun Kim
              </span>
            </div>
          </div>
          <div className="md-max:hidden mt-20 text-[13px] font-extrabold text-footer">
            ⓒ 2023 Hyperhire
          </div>
        </div>
        <div>
          <div className="flex items-center flex-wrap">
            <div className="py-3 pl-3 pr-12 bg-white rounded-[12px] m-2 md-max:w-[160px]">
              <div className="w-[40px] h-[40px] bg-footer flex items-center justify-center rounded-[8px]">
                <Image src={code} alt={code} />
              </div>
              <span className="block text-[14px] font-extrabold my-4">
                해외 개발자 원격 채용
              </span>
              <div className="flex items-center">
                <span className="text-[14px] font-extrabold text-footer">
                  바로가기
                </span>
                <Image src={rightSquare} alt={rightSquare} className="ml-2" />
              </div>
            </div>
            <div className="py-3 pl-3 pr-12 bg-white rounded-[12px] m-2 md-max:w-[160px]">
              <div className="w-[40px] h-[40px] bg-footer flex items-center justify-center rounded-[8px]">
                <Image src={avatar} alt={avatar} />
              </div>
              <span className="block text-[14px] font-extrabold my-4">
                외국인 원격 채용 (비개발)
              </span>
              <div className="flex items-center">
                <span className="text-[14px] font-extrabold text-footer">
                  바로가기
                </span>
                <Image src={rightSquare} alt={rightSquare} className="ml-2" />
              </div>
            </div>
            <div className="py-3 pl-3 pr-12 bg-white rounded-[12px] m-2 md-max:w-[160px]">
              <div className="w-[40px] h-[40px] bg-footer flex items-center justify-center rounded-[8px]">
                <Image src={kor} alt={kor} />
              </div>
              <span className="block text-[14px] font-extrabold my-4">
                한국어 가능 외국인 채용
              </span>
              <div className="flex items-center">
                <span className="text-[14px] font-extrabold text-footer">
                  바로가기
                </span>
                <Image src={rightSquare} alt={rightSquare} className="ml-2" />
              </div>
            </div>
            <div className="py-3 pl-3 pr-12 bg-white rounded-[12px] m-2 md-max:w-[160px]">
              <div className="w-[40px] h-[40px] bg-footer flex items-center justify-center rounded-[8px]">
                <Image src={gear} alt={gear} />
              </div>
              <span className="block text-[14px] font-extrabold my-4">
                해외 개발자 활용 서비스
              </span>
              <div className="flex items-center">
                <span className="text-[14px] font-extrabold text-footer">
                  바로가기
                </span>
                <Image src={rightSquare} alt={rightSquare} className="ml-2" />
              </div>
            </div>
          </div>
          <div className="md:hidden flex mt-10 md-max:pl-4">
            <div>
              <span className="block text-[12px] text-footer font-extrabold">
                상호명
              </span>
              <span className="block text-[13px] font-extrabold text-footer">
                하이퍼하이어
              </span>

              <span className="block text-[13px] font-extrabold text-footer">
                Hyperhire India Private Limited
              </span>
            </div>
            <div className="px-4">
              <span className="block text-[12px] text-footer font-extrabold">
                대표 CEO
              </span>
              <span className="block text-[13px] font-extrabold text-footer">
                김주현
              </span>

              <span className="block text-[13px] font-extrabold text-footer">
                Juhyun Kim
              </span>
            </div>
          </div>
          <div className="flex md-max:flex-col mt-16 md-max:px-4">
            <div>
              <span className="block text-[12px] text-footer font-extrabold">
                사업자등록번호 CIN
              </span>
              <span className="block text-[13px] font-extrabold text-footer">
                427-86-01187
              </span>

              <span className="block text-[13px] font-extrabold text-footer">
                U74110DL2016PTC290812
              </span>
            </div>
            <div className="px-8 md-max:px-0 md-max:py-8">
              <span className="block text-[12px] text-footer font-extrabold md-max:pb-2">
                주소 ADDRESS
              </span>
              <span className="block text-[13px] font-extrabold text-footer">
                서울특별시 강남대로 479, 지하 1층 238호
              </span>
              <div className="flex-inline md:w-[455px]">
                <span className="block text-[13px] font-extrabold text-footer">
                  D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
                  Delhi, 110053 India
                </span>
              </div>
            </div>
          </div>
          <div className="md:hidden pl-4 pb-12 text-[13px] font-extrabold text-footer">
            ⓒ 2023 Hyperhire
          </div>
        </div>
      </div>
    </div>
  );
}

# hyperfire-coin-siren
Solo Development
  {data?.map((item, index) => (
        <div
          key={index}
          className={`mr-2 ${
            // Right
            index === 0
              ? "absolute top-0 left-[266px]"
              : index === 1
              ? // Center
                "absolute top-[-20] left-[132px] z-10"
              : "ml-[9px]"
          }`}
        >
          {index === 1 ? (
            <button className="absolute top-[-50] left-36 transform -translate-x-1/2 -translate-y-1/2 w-[150px] bg-tooltipCorausel rounded-[8px] h-[39px] text-[18px] font-extrabold text-green">
              <div className="w-full flex items-center justify-center">
                <div className="bg-opacityGreen w-[26px] h-[26px] flex items-center justify-center rounded-full mr-2">
                  <Image src={dollar} alt={dollar} />
                </div>
                월 100만원
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
            className={`w-[292px] rounded-[12px] p-10 flex flex-col items-center ${
              index === 0
                ? "bg-carouselExclude shadow-cardExclude h-[400px]"
                : index === 1
                ? "bg-carousel shadow-card bg-white h-[440px]"
                : "bg-carouselExclude shadow-cardExclude h-[400px]"
            }`}
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
              {item.nickname}
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
        </div>
      ))}
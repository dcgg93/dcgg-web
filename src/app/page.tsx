import { AppLayout } from "@/components/layouts";
import Image from "next/image";

export default function Home() {
  return (
    <AppLayout>
      <div className="flex"></div>

      <div className="flex flex-row">
        <div className="flex flex-row">
          <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/dog.jpeg" // 이미지 경로는 /public 디렉토리를 기준으로 설정
                alt="dot img"
                layout="fill" // 이미지를 부모 요소의 크기에 맞춤
                objectFit="cover" // 부모 요소에 맞게 이미지를 크롭
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h1 className="text-gray-900 font-bold text-2xl">목적</h1>
              <p className="mt-2 text-gray-600">
                DDCG는 사람의 손으로 주방에서 직접 만든 휴먼그레이드 등급의
                맛있는 화식 사료를 제공합니다. 우리의 목표는 모든 반려견에게
                신선하고 건강한 음식을 제공하는 것입니다.
              </p>
            </div>
          </div>
        </div>

        <div className="ml-10">
          <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden h-full">
            <div className="relative h-48">
              <Image
                src="/dog.jpeg" // 이미지 경로는 /public 디렉토리를 기준으로 설정
                alt="dot img"
                layout="fill" // 이미지를 부모 요소의 크기에 맞춤
                objectFit="cover" // 부모 요소에 맞게 이미지를 크롭
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h1 className="text-gray-900 font-bold text-2xl">보증</h1>
              <p className="mt-2 text-gray-600">
                처음 구매하신 후에도 댁의 반려견에게 잘 맞지 않거나
                불만족스러우시다면 100% 환불해드립니다. 항상 최선을 다하는
                DDCG입니다.
              </p>
            </div>
          </div>
        </div>

        <div className="ml-10">
          <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden h-full">
            <div className="relative h-48">
              <Image
                src="/dog.jpeg" // 이미지 경로는 /public 디렉토리를 기준으로 설정
                alt="dot img"
                layout="fill" // 이미지를 부모 요소의 크기에 맞춤
                objectFit="cover" // 부모 요소에 맞게 이미지를 크롭
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h1 className="text-gray-900 font-bold text-2xl">영양</h1>
              <p className="mt-2 text-gray-600">
                AAFCO의 규정에 맞추어 제작하여 과도한 단백질이나 지방이 급여되지
                않도록 레시피를 제조했습니다. 저희는 특별한 재료를 사용하지
                않으며, 제품에 제공된 재료와 부족한 영양 성분을 보충하기 위한
                보충 영양제 외에는 추가하지 않습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

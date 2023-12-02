"use client";

import cloud_upload_outlined from "@/app/assets/image/icon/cloud-upload-outlined.svg";
import search from "@/app/assets/image/icon/search.svg";
import Image from "next/image";
import { useState } from "react";
import Select, { SingleValue, components } from "react-select";

const bankOptions = [
  {
    value: "BTN",
    label: "BTN",
  },
  {
    value: "BTPN",
    label: "BTPN",
  },
  {
    value: "BTN Syariah",
    label: "BTN Syariah",
  },
  {
    value: "BTPN Syariah",
    label: "BTPN Syariah",
  },
];

const bankSelect = {
  components: {
    DropdownIndicator: (props: any) => (
      <components.DropdownIndicator {...props}>
        <Image
          src={search}
          width={24}
          height={24}
          alt=""
          className="w-[24] aspect-square"
        />
      </components.DropdownIndicator>
    ),
  },
  styles: {
    control: (baseStyles: any) => ({
      ...baseStyles,
      borderColor: "#bdbdbd",
      height: "60px",
      minHeight: "60px",
      overflow: "hidden",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#bdbdbd",
      },
    }),
    input: (provided: any, state: any) => ({
      ...provided,
      margin: "0px",
    }),
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      height: "60px",
      padding: "0 0 0 10px",
    }),
    indicatorSeparator: (state: any) => ({
      display: "none",
    }),
    indicatorsContainer: (provided: any, state: any) => ({
      ...provided,
      height: "60px",
      backgroundColor: "#e7e7e7",
      width: "58px",
      justifyContent: "center",
      display: "flex",
    }),
  },
  theme: (theme: any) => ({
    ...theme,
    borderRadius: 10,
    colors: {
      ...theme.colors,
      primary25: "#E5E5E5",
      primary: "#FF385C",
      primary50: "none",
    },
  }),
};

export default function RegisterHoster() {
  const [selectedBankOption, setSelectedBankOption] =
    useState<SingleValue<{ value: string; label: string }>>(null);

  return (
    <main>
      <section className="bg-[#f5f5f5] pt-[calc(115px+72px)] pb-[149px]">
        <div className="container px-0 md:px-[100px] max-w-[calc(816px+40px)]">
          <form method="POST">
            <div className="bg-white border-t-8 border-dark-pink pt-[76px] pb-[78px] px-3 lg:px-[105px] [box-shadow:0px_8px_20px_0px_rgba(97,97,97,0.07)]">
              <h1 className="text-[28px] mb-[42px] font-medium tracking-[0.2px]">
                Register as Hoster
              </h1>
              <div className="form-input mb-7">
                <label
                  htmlFor="username"
                  className="block mb-2 text-base text-[#8e8e8e]"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="w-full text-lg font-medium px-5 border border-[#cecece] rounded-md h-[60px]"
                  name="username"
                  id="username"
                />
              </div>
              <div className="form-input mb-7">
                <label
                  htmlFor="password"
                  className="block mb-2 text-base text-[#8e8e8e]"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="w-full text-lg font-medium px-5 border border-[#cecece] rounded-md h-[60px]"
                  name="password"
                  id="password"
                />
              </div>
              <div className="form-input mb-7">
                <label
                  htmlFor="email"
                  className="block mb-2 text-base text-[#8e8e8e]"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="w-full text-lg font-medium px-5 border border-[#cecece] rounded-md h-[60px]"
                  name="email"
                  id="email"
                />
              </div>
              <div className="form-input mb-7">
                <label
                  htmlFor="nomor_handphone"
                  className="block mb-2 text-base text-[#8e8e8e]"
                >
                  Nomor Handphone
                </label>
                <input
                  type="text"
                  className="w-full text-lg font-medium px-5 border border-[#cecece] rounded-md h-[60px]"
                  name="nomor_handphone"
                  id="nomor_handphone"
                />
              </div>
              <div className="form-input mb-7">
                <label
                  htmlFor="alamat"
                  className="block mb-2 text-base text-[#8e8e8e]"
                >
                  Alamat
                </label>
                <textarea
                  className="h-[150px] py-4 w-full text-lg font-medium px-5 border border-[#cecece] rounded-md"
                  name="alamat"
                  id="alamat"
                ></textarea>
              </div>
              <div className="form-input mb-7">
                <label
                  htmlFor="foto_ktp"
                  className="block mb-2 text-base text-[#8e8e8e]"
                >
                  Upload Foto KTP
                </label>
                <div className="w-full bg-[#f4f4f4] border-dashed border-[2px] border-[#d8d8d8] flex items-center pt-[22px] pb-[15px] flex-col">
                  <Image
                    src={cloud_upload_outlined}
                    alt=""
                    width={60}
                    height={60}
                    priority
                    className="mb-[6px]"
                  />
                  <span className="text-[#afafaf] font-medium text-sm mb-7">
                    Upload Foto KTP (JPG,PNG)
                  </span>
                  <div className="fileUpload relative overflow-hidden">
                    <input
                      type="file"
                      accept=".jpg,.png"
                      id="foto_ktp"
                      name="foto_ktp"
                      className="absolute top-0 bottom-0 right-0 left-0 w-fit -translate-x-1/2 cursor-pointer opacity-0"
                    />

                    <div className="block text-[#00a3ff] text-[12px] font-medium  bg-white border rounded-[5px] border-[#d4d4d4] py-[10px] px-[17px]">
                      Browse File
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-input mb-7">
                <label
                  htmlFor="bank"
                  className="block mb-2 text-base text-[#8e8e8e]"
                >
                  Bank Pembayaran
                </label>
                <Select
                  className="text-lg font-medium"
                  defaultValue={selectedBankOption}
                  name="bank"
                  id="bank"
                  onChange={(selectedBankOption) =>
                    setSelectedBankOption(selectedBankOption)
                  }
                  options={bankOptions}
                  placeholder=""
                  {...bankSelect}
                />
              </div>
              <div className="form-input mb-7">
                <label
                  htmlFor="selfie_photo_ktp"
                  className="block mb-2 text-base text-[#8e8e8e]"
                >
                  Upload Foto Selfie Dengan KTP (JPG,PNG)
                </label>
                <div className="w-full bg-[#f4f4f4] border-dashed border-[2px] border-[#d8d8d8] flex items-center pt-[22px] pb-[15px] flex-col">
                  <Image
                    src={cloud_upload_outlined}
                    alt=""
                    width={60}
                    height={60}
                    priority
                    className="mb-[6px]"
                  />
                  <span className="text-[#afafaf] font-medium text-sm mb-7">
                    Upload Foto Selfie Dengan KTP (JPG,PNG)
                  </span>
                  <div className="fileUpload relative overflow-hidden">
                    <input
                      type="file"
                      accept=".jpg,.png"
                      id="selfie_photo_ktp"
                      name="selfie_photo_ktp"
                      className="absolute top-0 bottom-0 right-0 left-0 w-fit -translate-x-1/2 cursor-pointer opacity-0"
                    />

                    <div className="block text-[#00a3ff] text-[12px] font-medium  bg-white border rounded-[5px] border-[#d4d4d4] py-[10px] px-[17px]">
                      Browse File
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-input mb-7">
                <label
                  htmlFor="nomor_rekening"
                  className="block mb-2 text-base text-[#8e8e8e]"
                >
                  Nomor Rekening
                </label>
                <input
                  type="text"
                  className="w-full text-lg font-medium px-5 border border-[#cecece] rounded-md h-[60px]"
                  name="nomor_rekening"
                  id="nomor_rekening"
                />
              </div>
              <div className="form-input mb-[45px]">
                <label
                  htmlFor="buku_tabungan"
                  className="block mb-2 text-base text-[#8e8e8e]"
                >
                  Upload Foto Buku Tabungan KTP (JPG,PNG)
                </label>
                <div className="w-full bg-[#f4f4f4] border-dashed border-[2px] border-[#d8d8d8] flex items-center pt-[22px] pb-[15px] flex-col">
                  <Image
                    src={cloud_upload_outlined}
                    alt=""
                    width={60}
                    height={60}
                    priority
                    className="mb-[6px]"
                  />
                  <span className="text-[#afafaf] font-medium text-sm mb-">
                    Upload Foto Buku Tabungan KTP (JPG,PNG)
                  </span>
                  <div className="fileUpload relative overflow-hidden">
                    <input
                      type="file"
                      accept=".jpg,.png"
                      id="buku_tabungan"
                      name="buku_tabungan"
                      className="absolute top-0 bottom-0 right-0 left-0 w-fit -translate-x-1/2 cursor-pointer opacity-0"
                    />

                    <div className="block text-[#00a3ff] text-[12px] font-medium  bg-white border rounded-[5px] border-[#d4d4d4] py-[10px] px-[17px]">
                      Browse File
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-input">
                <button
                  type="submit"
                  className="text-[22px] font-bold 	py-4 text-center w-full block text-white bg-dark-pink rounded-md"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

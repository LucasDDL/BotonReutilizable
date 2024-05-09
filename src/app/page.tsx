'use client';

import { Button } from "@/components";
import Input from "@/components/Input/Input";
import { ArrowDown } from "@/icons/components";
import { Notification } from "@/icons/components/Notification";
import { Settings } from "@/icons/components/Settings";

export default function Home() {
  return (
    <div className="min-w-full flex flex-col">
      <div className="flex mt-[22px] mr-[37px] gap-4 items-center justify-end">
        <Notification/>
        <Settings/>
        <div className="flex justify-center items-center rounded-full size-10 bg-primary-50 text-[16px] leading-[22px] text-[#F7F7FC] font-normal">S</div>
      </div>
      <div className="flex flex-col gap-8 mx-auto">
        <h1 className="text-primary-50 text-[20px] leading-[42px]">Clientes / <span className="text-[32px] leading-[42px]">Sebastian Salines</span></h1>
        <div className="flex flex-col gap-8 items-center">
          <div className="self-start">
            <Input startIcon={<Settings />} endIcon={<ArrowDown />} label={'Tipo'} />
          </div>
          <div className="datos flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-primary-40">Datos</h2>
              <div className="flex">
                <Input startIcon={<Settings />} endIcon={<ArrowDown />} label={'Tipo'} />
                <Input startIcon={<Settings />} endIcon={<ArrowDown />} label={'Tipo'} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex">
                <Input startIcon={<Settings />} endIcon={<ArrowDown />} label={'Tipo'} />
                <Input startIcon={<Settings />} endIcon={<ArrowDown />} label={'Tipo'} />
              </div>
            </div>
          </div>
          <div className="datos-de-envio flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="text-primary-40">Datos de envio</h2>
              <div className="flex">
                <Input startIcon={<Settings />} endIcon={<ArrowDown />} label={'Tipo'} />
                <Input startIcon={<Settings />} endIcon={<ArrowDown />} label={'Tipo'} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex">
                <Input startIcon={<Settings />} endIcon={<ArrowDown />} label={'Tipo'} />
                <Input startIcon={<Settings />} endIcon={<ArrowDown />} label={'Tipo'} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-6 pr-2 self-end">
            <Button className="font-medium" variant="text" color="primary" size="md">Cancelar</Button>
            <Button disabled size="md">Guardar</Button>
          </div>
        </div>
      </div>
    </div>

  )
}

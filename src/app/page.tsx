'use client';

import { Button } from "@/components";
import { Avatar } from "@/components/Avatar";
import Input from "@/components/Input/Input";
import { ArrowDown } from "@/icons/components";
import { Notification } from "@/icons/components/Notification";
import { Settings } from "@/icons/components/Settings";

export default function Home() {
  return (
    <div className="min-w-full flex flex-col">
      <div className="flex mt-[22px] mr-[37px] gap-4 items-center justify-end">
        <Notification />
        <Settings />
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&s" color="neutral" size="lg">S</Avatar>
      </div>
      <div className="flex flex-col gap-8 mx-auto">
        <h1 className="text-primary text-[20px] leading-[42px]">Clientes / <span className="text-[32px] leading-[42px]">Sebastian Salines</span></h1>
        <p className="my-4 max-w-[50vw] text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium dolor ante, ut vulputate quam dapibus id. Donec eleifend suscipit lacinia. In et ornare lorem. Mauris ultricies nisi turpis, ac venenatis nisi tempus ac. Nullam ac ligula quis diam sollicitudin fringilla ac at turpis. Duis ipsum elit, dignissim vel urna ut, iaculis faucibus augue. Praesent viverra lorem mollis ultricies feugiat. Vivamus in feugiat ipsum. Donec elementum est ac ex eleifend, eu imperdiet leo tincidunt. Pellentesque nec placerat elit. Aliquam non dolor pulvinar, tincidunt diam at, egestas metus. Suspendisse porta, erat at aliquet maximus, lacus ipsum feugiat velit, at efficitur leo metus a augue. Suspendisse facilisis pellentesque mauris vel convallis. Aenean porttitor sagittis justo, id scelerisque ligula. Maecenas quis tincidunt purus. Cras et arcu sit amet magna vulputate laoreet eget et neque.
        </p>
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
            <Button className="font-medium" startIcon={<Settings />} variant="text" color="primary" size="md">Cancelar</Button>
            <Button size="md" startIcon={<Settings />}>Guardar</Button>
          </div>
        </div>
      </div>
    </div>

  )
}

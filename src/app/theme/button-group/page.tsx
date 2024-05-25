import { Button, ButtonGroup, Checkbox } from "@/components";
import { Chip } from "@/components";
import { Avatar } from "@/components/Avatar";
import { ArrowDown } from "@/icons/components";

export default function ButtonGroupTest() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-screen">
      <ButtonGroup>
        <Button variant="outlined">UNO</Button>
        <Button variant="outlined">DOS</Button>
        <Button variant="outlined">TRES</Button>
      </ButtonGroup>
      <Checkbox label="Checkbox" />
      <Chip avatar={<Avatar color="neutral">S</Avatar>}>Content</Chip>
      <Chip startIcon={<ArrowDown />} color="neutral">Content</Chip>
      <Chip endIcon={<ArrowDown />}>Content</Chip>
    </div>
  )
}
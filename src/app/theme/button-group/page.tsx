import { Button, ButtonGroup, Checkbox, IconButton, ToggleButton } from "@/components";
import { Chip } from "@/components";
import { Avatar } from "@/components/Avatar";
import { ArrowDown, Settings, ShoppingBagOutline, StoreFontOutline } from "@/icons/components";

export default function ButtonGroupTest() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-screen">
      <ButtonGroup>
        <Button variant="outlined">UNO</Button>
        <Button variant="contained">DOS</Button>
        <Button variant="text">TRES</Button>
      </ButtonGroup>
      <Checkbox size="sm" label="Checkbox" />
      <Checkbox size="md" label="Checkbox" />
      <Checkbox size="lg"  label="Checkbox" />
      <div className="flex gap-3">
        <Chip avatar={<Avatar color="neutral">S</Avatar>}>Content</Chip>
        <Chip startIcon={<ArrowDown />} color="neutral">Content</Chip>
        <Chip endIcon={<ArrowDown />}>Content</Chip>
      </div>
      <div className="flex items-center gap-3">
        <IconButton size="sm" color="neutral">
          <ShoppingBagOutline />
        </IconButton>
        <IconButton size="md">
          <Settings />
        </IconButton>
        <IconButton size="lg">
          <StoreFontOutline />
        </IconButton>
      </div>
      <ToggleButton>
        <Button>boton</Button>
      </ToggleButton>
    </div>
  )
}
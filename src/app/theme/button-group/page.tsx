import { AppBar, Button, ButtonGroup, Checkbox, IconButton, Paper, Tab, Tabs, ToggleButton } from "@/components";
import { Chip } from "@/components";
import { Avatar } from "@/components/Avatar";
import { ArrowDown, Settings, ShoppingBagOutline, StoreFontOutline } from "@/icons/components";

export default function ButtonGroupTest() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-screen my-5 ">
      <div>
        <h1>ButtonGroup</h1>
        <ButtonGroup variant="contained" color='primary'>
          <Button>UNO</Button>
          <Button>DOS</Button>
          <Button>TRES</Button>
        </ButtonGroup>
      </div>
      <div>
        <h1>Checkbox</h1>
        <div className="flex gap-3">
          <Checkbox size="sm" label="Checkbox" />
          <Checkbox size="md" label="Checkbox" />
          <Checkbox size="lg" label="Checkbox" />
        </div>
      </div>
      <div>
        <h1>Chip</h1>
        <div className="flex gap-3">
          <Chip avatar={<Avatar color="neutral">S</Avatar>}>Content</Chip>
          <Chip startIcon={<ArrowDown />} color="neutral">Content</Chip>
          <Chip endIcon={<ArrowDown />}>Content</Chip>
        </div>
      </div>
      <div>
        <h1>IconButton</h1>
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
      </div>
      <div>
        <h1>ToggleButton</h1>
        <div className="flex flex-col gap-3">
          <ToggleButton>
            <Button>boton 1</Button>
            <Button>boton 2</Button>
            <Button>boton 3</Button>
          </ToggleButton>
          <ToggleButton direction="vertical" size="lg" color="neutral">
            <Button>boton 1</Button>
            <Button>boton 2</Button>
            <Button>boton 3</Button>
          </ToggleButton>
        </div>
      </div>
      <div>
        <h1>Tabs</h1>
        <Tabs>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </div>

      <h1>AppBar</h1>
      <AppBar color="neutral">
        <Avatar>B</Avatar>
        <Settings />
      </AppBar>

      <div className="flex gap-4">
        <Paper>
          Tu prima
        </Paper>
      </div>
    </div>
  )
}
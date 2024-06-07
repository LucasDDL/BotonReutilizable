'use client'

import { Alert, AppBar, Avatar, Button, ButtonGroup, Checkbox, Chip, IconButton, Paper, Popover, Radio, RadioGroup, Switch, Tab, Tabs, ToggleButton } from "@/components";
import { ArrowDown, Settings, ShoppingBagOutline, StoreFontOutline } from "@/icons/components";
import { useRef, useState } from "react";

export default function ButtonGroupTest() {
  const [open, setOpen] = useState(false)

  const anchor = useRef<HTMLButtonElement>(null)

  const [switchOn, setSwitchOn] = useState(false)

  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-screen my-5 ">
      <h2>Button</h2>
      <Button ref={anchor} onClick={() => setOpen(prev => !prev)}>UNO</Button>
      <Popover open={open} anchor={anchor.current}>
        <h2>Popover</h2>
      </Popover>
      <h2>Switch</h2>
      <div className="flex flex-col gap-1">
        <h5>Uncontrolled</h5>
        <Switch />
        <h5>Controlled</h5>
        <Switch checked={switchOn} onChange={(v) => setSwitchOn(v)} />
      </div>
      <h2>ButtonGroup</h2>
      <ButtonGroup variant="contained" color='primary'>
        <Button>UNO</Button>
        <Button>DOS</Button>
        <Button>TRES</Button>
      </ButtonGroup>
      <div>
        <h2>Checkbox</h2>
        <div className="flex gap-3">
          <Checkbox size="sm" label="Checkbox" />
          <Checkbox size="md" label="Checkbox" />
          <Checkbox size="lg" label="Checkbox" />
        </div>
      </div>2
      <div>
        <h2>Chip</h2>
        <div className="flex gap-3">
          <Chip avatar={<Avatar color="neutral">S</Avatar>}>Content</Chip>
          <Chip startIcon={<ArrowDown />} color="neutral">Content</Chip>
          <Chip endIcon={<ArrowDown />}>Content</Chip>
        </div>
      </div>
      <div>
        <h2>IconButton</h2>
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
        <h2>ToggleButton</h2>
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
        <h2>Tabs</h2>
        <Tabs>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </div>

      <h2>AppBar</h2>
      <AppBar color="neutral">
        <Avatar>B</Avatar>
        <Settings />
      </AppBar>

      <div className="flex gap-4">
        <Paper>
          Tu prima
        </Paper>
      </div>
      <div>
        <h2>Radio Group</h2>
        <RadioGroup direction="vertical" color="neutral" size="sm">
          <Radio label="End" />
          <Radio labelPlacement="top" label="Top" />
          <Radio labelPlacement="start" label="Start" />
          <Radio labelPlacement="bottom" label="Bottom" />
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-center">Alert</h2>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-center">Outlined</h2>
            <Alert variant="outlined">
              Info Alert
            </Alert>
            <Alert variant="outlined" severity="error">
              Error Alert
            </Alert>
            <Alert variant="outlined" severity="success">
              Success Alert
            </Alert>
            <Alert variant="outlined" severity="warning">
              Warning Alert
            </Alert>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-center">Contanied</h2>
            <Alert variant="contained">
              Info Alert
            </Alert>
            <Alert variant="contained" severity="error">
              Error Alert
            </Alert>
            <Alert variant="contained" severity="success">
              Success Alert
            </Alert>
            <Alert variant="contained" severity="warning">
              Warning Alert
            </Alert>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-center">Default</h2>
            <Alert>
              Info Alert
            </Alert>
            <Alert severity="error">
              Error Alert
            </Alert>
            <Alert severity="success">
              Success Alert
            </Alert>
            <Alert severity="warning">
              Warning Alert
            </Alert>
          </div>
        </div>
      </div>
    </div >
  )
}
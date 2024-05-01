import {Button} from "@/components/ui/Button";



export default function Home() {
  return (
   <div className="flex justify-center items-center min-h-screen gap-1">
     <Button size="lg" variant="contained" color="primary-50">Label Text</Button>
     <Button size="md" variant="outlined" color="neutral-50">Lebel Text</Button>
     <Button size="sm" variant="text" color="primary-50">Lebel Text</Button>
   </div>
    
  )

}

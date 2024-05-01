import {Button} from "@/components/ui/Button";



export default function Home() {
  return (
   <div className="flex justify-center items-center min-h-screen gap-1">
     <Button size="lg" variant="contained">Label Text</Button>
     {/* btn btn-lg btn-contained btn-primary */}
     <Button size="md" variant="outlined">Lebel Text</Button>
     <Button variant="text">Lebel Text</Button>
   </div>
    
  )

}

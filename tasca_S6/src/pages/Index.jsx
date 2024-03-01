import Card from "../components/Card"
import HeaderPage from "../components/HeaderPage"
import TotalPrice from "../components/TotalPrice"
import { usePresContext } from "../context/PresContext"

const Index = () => {
    const {presupost, setPresupost} = usePresContext()
    return (
        <>
        <HeaderPage />
        {
            presupost.map(press => <Card key={press.id} press={press} setPresupost={setPresupost}/>)
        }
      
        <TotalPrice />
   
        
        </>
    )
}

export default Index
import parse from 'html-react-parser'
import { fontSecondary } from '@/ui/fonts'
import { Icon } from '@mui/material';
import ArchitectureOutlinedIcon from '@mui/icons-material/ArchitectureOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';

const icons = [
    {
        id: 0,
        name: <ArchitectureOutlinedIcon style={{ fontSize: 64 }} />,
    },
    {
        id: 1,
        name: <EngineeringOutlinedIcon style={{ fontSize: 64 }} />,
    },
    {
        id: 2,
        name: <AccountBalanceWalletOutlinedIcon style={{ fontSize: 64 }} />,
    },
    {
        id: 3,
        name: <AssignmentOutlinedIcon style={{ fontSize: 64 }} />,
    },

]

export default async function Workflow({section}) {
    const data = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/proces')
    let items = await data.json()

    items = items.sort((a, b) => a.meta.display_order - b.meta.display_order)

    const subheadingClasses = `text-center ${fontSecondary.className} text-lg`

    return (
        <div className="my-32 w-4/6 mx-auto">
            <div className={subheadingClasses}>{section.meta.subheading}</div>
            <h2 className='mx-auto text-6xl w-3/4 text-center uppercase'>{section.meta.heading}</h2>
            <div className="mt-16 workflow-steps flex justify-between">
                {items.map((item, i) => {
                    return (
                        <div key={item.id} className="workflow-step w-1/6">
                            {icons[i].name}
                            <h3 className='mt-4 mb-8 h-12 text-2xl font-bold text-amber-600'>{item.title.rendered}</h3>
                            {parse(item.content.rendered)}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
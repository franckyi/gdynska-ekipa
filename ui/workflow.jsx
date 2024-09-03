import parse from 'html-react-parser'
import { fontSecondary } from '@/ui/fonts'
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

    const headingClasses = 'mx-auto xl:mb-24 text-4xl lg:text-6xl lg:w-3/4 text-center uppercase'
    const subheadingClasses = `text-center ${fontSecondary.className} text-lg`
    const processContainerClasses = "mt-16 workflow-steps text-center lg:text-left flex flex-wrap gap-8 justify-between"
    const processTitleClasses = "lg:mt-4 lg:mb-8 h-12 text-2xl font-bold text-amber-600"

    return (
        <div className="my-32 w-4/6 mx-auto">
            <div className={subheadingClasses}>{section.meta.subheading}</div>
            <h2 className={headingClasses}>{section.meta.heading}</h2>
            <div className={processContainerClasses}>
                {items.map((item, i) => {
                    return (
                        <div key={item.id} className="workflow-step p-4 border border-amber-600 md:w-2/6 lg:w-1/6 transition-all duration-500 hover:rounded-[50px] hover:bg-stone-900">
                            {icons[i].name}
                            <h3 className={processTitleClasses}>{item.title.rendered}</h3>
                            {parse(item.content.rendered)}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
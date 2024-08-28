type PageTitleProps = {
    text: string
}

const PageTitle = (props: PageTitleProps) => {
    return (
        <legend className="bg-blue-500/30 rounded-lg text-blue-700 px-4 py-2 w-fit mx-auto my-8 shadow-lg">{props.text}</legend>
    )
}

export default PageTitle
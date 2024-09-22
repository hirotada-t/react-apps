interface PageProps {
  params: {
    url: string | string[] | undefined
  }
}

const Page = ({ params }: PageProps) => {
  console.log(params)
   
  return <p>hello</p>
}

export default Page
import { ragChat } from "../lib/rag-caht"
import { redis } from "../lib/redis";

interface PageProps {
  params: {
    url: string | string[] | undefined
  }
}

function reconstructUrl({ url }: { url: string[] }) {
  const decodedComponents = url.map(component => decodeURIComponent(component));
  decodedComponents[0] += "/"
  return decodedComponents.join("/")
}

const Page = async ({ params }: PageProps) => {
  const reconstructedUrl = reconstructUrl({ url: params.url as string[] })

  const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstructedUrl);

  if (!isAlreadyIndexed) {
    await ragChat.context.add({
      type: "html",
      source: reconstructedUrl,
      config: { chunkOverlap: 50, chunkSize: 200 }
    })

    await redis.sadd("indexed-urls", reconstructedUrl)
  }

  return <p>hello</p>
}

export default Page
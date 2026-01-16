import CreateManga from "../page";

interface MangaGenresProps {
  params: Promise<{ id: string }>;
}
export default async function Page( {params} : MangaGenresProps) {   
    const { id } = await params;
  return (<div>
    <CreateManga genre={id}  />
  </div>)
}

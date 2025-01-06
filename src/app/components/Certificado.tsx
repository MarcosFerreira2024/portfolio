import { getCertificados } from "../utils/fetch";
import BotaoMaior from "./BotaoMaior";

async function Certificado() {
  const data = await getCertificados();

  return (
    <section className="grid justify-center gap-5 md:gap-0 md:grid-cols-2 ">
      {data?data.map((certificado) => (
        <div className="mb-10" key={certificado.id}>
            <div className=" h-[100%]  flex flex-col justify-between ">
                <div>
                <BotaoMaior label={certificado.titulo} href={certificado.url} target="_blank" classes="justify-between max-w-[220px] text-lg font-title" alt="ver certificiado" src="/Geral/seta.svg" className="" />
                  <p className="text-sm max-w-[322px] font-title pt-2 " dangerouslySetInnerHTML={{ __html: certificado.descricao }} />
                </div>
                <div className=" h-[2px] max-w-[322px] mt-2 bg-subtitle"></div>
            </div>
        </div>
      )):null}
    </section>
  );
}

export default Certificado;
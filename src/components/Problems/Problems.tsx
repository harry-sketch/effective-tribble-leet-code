import ProblemsTable from "./ProblemsTable";

type ProblemsProps = {};

const Problems: React.FC<ProblemsProps> = () => {
  return (
    <section className="flex items-center justify-center flex-col mt-8">
      <h1 className="text-[#363E4A] font-semibold text-3xl">
        &#34; QUALITY OVER QUANTITY ” 👇
      </h1>

      <ProblemsTable />
    </section>
  );
};
export default Problems;

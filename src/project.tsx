function Projects() {
    return (
        <>
            <div className="mt-10"><h1 className="text-2xl text-[var(--text-color)] font-bold mb-4 text-center">Projects</h1></div>
            <div className="flex justify-evenly">
                <div className="w-[450px] flex items-center justify-center  ">
                    <div className="w-[0.2px] h-100 bg-[var(--project-bar)] shadow-[0px_0px_40px_6px_var(--project-bar)] rounded-2xl flex overflow-visible justify-center items-center">
                        <div className="w-[500px] shadow-[0px_0px_40px_-20px_var(--project-bar)] h-[250px] rounded-xl bg-[var(--contribution-background)] flex-none border-4 border-[var(--color-primary)]"></div>
                    </div>
                </div>
                <div className="w-170 h-100 bg-[var(--contribution-background)] rounded-2xl border-4 border-[var(--color-primary)] text-[var(--text-color)] text-center">
                <h1>Project1</h1>
                <p className="">A project that helps you</p>
                </div>
            </div>
        </>
    )
    
}
export default Projects;    
const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full md:w-4/5 mx-auto">
            {children}
        </div>
    );
};

export default Wrapper;

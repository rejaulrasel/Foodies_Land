const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-3/12 mx-auto text-center mb-8 uppercase ">
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl border-y-4 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
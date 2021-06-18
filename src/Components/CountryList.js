import React from "react";

const CountryList = ({ countryList = [] }) => {
    return (
        <>
            {countryList.map((data) => {
                if (data) {
                    return (
                        <div key={data.name}>
                            <h1>{data.name}</h1>
                            <img src={data.flag} alt="flag" width="200px" />
                        </div>
                    );
                }
                return null;
            })}
        </>
    );
};

export default CountryList;

import React from "react";

const BtnLoading = () => {
    return (
        <>
            <div class="flex items-center justify-center">
                <div class="relative">
                    <div class="h-10 w-10"></div>
                    <div class="absolute top-0 left-0 h-10 w-10 rounded-full border-t-8 border-b-8 border-[var(--primary-color)] animate-spin"></div>
                </div>
            </div>
        </>
    );
};

export default BtnLoading;

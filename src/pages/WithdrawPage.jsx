import Modal from "@/components/Modal";
import React, {useEffect, useState} from "react";
import {Badge} from "@/components/ui/badge";
import {useDispatch, useSelector} from "react-redux";
import {getAllWithdraws} from "@/redux/slice/withdrawslice";

const WithdrawPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to open the dialog
    const openDialog = () => setIsOpen(true);

    // Function to close the dialog
    const closeDialog = () => setIsOpen(false);

    const dispatch = useDispatch();
    const {withdrawRequests} = useSelector((state) => state.withdraw);
    console.log(withdrawRequests);
    useEffect(() => {
        dispatch(getAllWithdraws());
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-6xl font-bold pb-12 pt-8 text-center">
                Withdraws Approval
            </h1>
            <div className="grid grid-cols gap-8 mb-20">
                <div
                    onClick={openDialog}
                    className="px-12 py-2 w-full bg-[#F4F4F4] text-black rounded-[40px] shadow-xl cursor-pointer text-left"
                >
                    <div className="flex text-[#00AA55] header-detail">
                        <h1 className="text-2xl mb-4 w-1/2">Kamis, 20 September 2024</h1>
                        <p className="text-2xl w-1/2 text-right">20.000.000</p>
                    </div>
                    <div className="border-b-2 border-gray-300 my-2"></div>
                    <div className="flex">
                        <h1 className="text-3xl font-bold mb-4 w-1/2">
                            Jaya Kencana Catering
                        </h1>
                        <p className="text-2xl w-1/2 text-right">BCA - 200010230243</p>
                    </div>
                </div>
                <div
                    onClick={openDialog}
                    className="px-12 py-2 w-full bg-[#F4F4F4] text-black rounded-[40px] shadow-xl cursor-pointer text-left"
                >
                    <div className="flex text-[#00AA55] header-detail">
                        <h1 className="text-2xl mb-4 w-1/2">Kamis, 20 September 2024</h1>
                        <p className="text-2xl w-1/2 text-right">20.000.000</p>
                    </div>
                    <div className="border-b-2 border-gray-300 my-2"></div>
                    <div className="flex">
                        <h1 className="text-3xl font-bold mb-4 w-1/2">
                            Jaya Kencana Catering
                        </h1>
                        <p className="text-2xl w-1/2 text-right">BCA - 200010230243</p>
                    </div>
                </div>
                <div
                    onClick={openDialog}
                    className="px-12 py-2 w-full bg-[#F4F4F4] text-black rounded-[40px] shadow-xl cursor-pointer text-left"
                >
                    <div className="flex text-[#00AA55] header-detail">
                        <h1 className="text-2xl mb-4 w-1/2">Kamis, 20 September 2024</h1>
                        <p className="text-2xl w-1/2 text-right">20.000.000</p>
                    </div>
                    <div className="border-b-2 border-gray-300 my-2"></div>
                    <div className="flex">
                        <h1 className="text-3xl font-bold mb-4 w-1/2">
                            Jaya Kencana Catering
                        </h1>
                        <p className="text-2xl w-1/2 text-right">BCA - 200010230243</p>
                    </div>
                </div>
                <div
                    onClick={openDialog}
                    className="px-12 py-2 w-full bg-[#F4F4F4] text-black rounded-[40px] shadow-xl cursor-pointer text-left"
                >
                    <div className="flex text-[#00AA55] header-detail">
                        <h1 className="text-2xl mb-4 w-1/2">Kamis, 20 September 2024</h1>
                        <p className="text-2xl w-1/2 text-right">20.000.000</p>
                    </div>
                    <div className="border-b-2 border-gray-300 my-2"></div>
                    <div className="flex">
                        <h1 className="text-3xl font-bold mb-4 w-1/2">
                            Jaya Kencana Catering
                        </h1>
                        <p className="text-2xl w-1/2 text-right">BCA - 200010230243</p>
                    </div>
                </div>
            </div>
            <Modal
                title={"Withdraw Detail"}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                closeDialog={closeDialog}
            >
                <div className="w-1/2">
                    <h1 className="text-xl font-bold">Joko Sound</h1>
                    <div className="border-b-2 border-gray-300 my-2"></div>
                </div>

                <div className="flex">
                    <div className="w-1/2">
                        <div className="flex">
                            <h1 className="font-bold w-full">Vendor ID</h1>
                            <p className="w-1/2">22000394394393</p>
                        </div>
                        <div className="flex">
                            <h1 className="font-bold w-full">Nominal</h1>
                            <p className="w-1/2">7.000.000</p>
                        </div>
                        <div className="flex">
                            <h1 className="font-bold w-full">Bank</h1>
                            <p className="w-1/2">BCA</p>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="flex">
                            <h1 className="font-bold w-1/2">Account Number</h1>
                            <p className="w-1/2">200039943923432343</p>
                        </div>
                        <div className="flex">
                            <h1 className="font-bold w-1/2">Request</h1>
                            <p className="w-1/2">20 November 2024</p>
                        </div>
                        <div className="flex">
                            <h1 className="font-bold w-1/2">Status</h1>
                            <div className="flex items-center">
                                <Badge className={"bg-[#00AA55] text-white"}>Active</Badge>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="flex flex-col items-center mx-2">
                        <button
                            onClick={closeDialog}
                            className="bg-[#00F279] text-white py-3 px-8 rounded-[30px] font-bold text-lg mb-2 w-36"
                        >
                            Approve
                        </button>
                    </div>
                    <div className="flex flex-col items-center mx-2">
                        <button
                            onClick={closeDialog}
                            className="bg-[#FF0000] text-white py-3 px-8 rounded-[30px] font-bold text-lg mb-2 w-36"
                        >
                            Reject
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default WithdrawPage;

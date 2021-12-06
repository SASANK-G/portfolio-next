import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import Image from "next/image";

function Trail() {
    return (
        <div>
            <div className="box"><i className="fas ImQuotesLeft fa2"><ImQuotesRight/></i>
                <div className="text"><i className="fas fa-quote-right fa1"><ImQuotesLeft/></i>
                    <div>
                        <Image
                            src="/images/me.jpg"
                            alt="avatar"
                            className=""
                            height="128px"
                            width="128px"
                            layout="intrinsic"
                            quality="100"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trail

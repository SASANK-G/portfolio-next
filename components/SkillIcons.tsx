import { FunctionComponent } from "react";

import { SkillIcon } from "../types";

const SkillIcons: FunctionComponent<{ value: SkillIcon }> =({value: { Icon, name, color },}) =>{

    const IconColor = `${color}`;
    return (
        <div className="items-center mx-4 my-3 text-white ">
            
                    <Icon className="w-10 h-10" 
                    style={{
                        color: IconColor,
                      }}
                      />
            
        </div>
    )
}

export default SkillIcons

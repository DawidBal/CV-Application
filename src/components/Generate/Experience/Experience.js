import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Button from '../../Utilities/Button'
import ExperienceForm from './ExperienceForm'

const Experience = (props) => {
	const { data, setData, dataList, setDataList, setObjData, setObjDataInArr, updateData, updateListData, submit, remove } = props

    return (
        <div className="experience">
        	<h3>Experience</h3>
            { 
							dataList.map((expItem, index) => 
							<ExperienceForm key={expItem.id} id={expItem.id} data={expItem}
							setDataPresent={() => setObjDataInArr(index, expItem, dataList, setDataList)} 
							remove={() => remove(dataList, setDataList, index)}
							onChange={(e) => updateListData(e, expItem, dataList, setDataList, index)} 
							/> )
            }
            <ExperienceForm data={data} setDataPresent={() => setObjData(data, setData)} onChange={(e) => updateData(e, setData, data)}/>
            <Button className="btn" title="Add" onClick={submit} icon={faPlus} />
        </div>
    )
}

export default Experience

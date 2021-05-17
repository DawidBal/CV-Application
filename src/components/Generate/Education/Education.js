import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Button from '../../Utilities/Button'
import EducationForm from './EducationForm'

const Education = (props) => {
    const { data, setData, dataList, setDataList, setObjData, setObjDataInArr, updateData, updateListData, submit, remove } = props

    return (
        <div className="Education">
            <h3>Education</h3>
            { 
            dataList.map((eduItem, index) => 
            <EducationForm key={eduItem.id} data={eduItem}
            setDataPresent={() => setObjDataInArr(index, eduItem, dataList, setDataList)}
            remove={() => remove(dataList, setDataList, index)}
            onChange={(e) => updateListData(e, eduItem, dataList, setDataList, index)} 
            />) 
            }
            <EducationForm data={data} setDataPresent={() => setObjData(data, setData)} onChange={(e) => updateData(e, setData, data)}/>
            <Button className="btn" title="Add" onClick={submit} icon={faPlus}/>
        </div>
    )
}

export default Education

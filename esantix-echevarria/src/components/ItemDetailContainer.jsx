import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import FAKE_DETAILS_DB from '../js/detailData'
import LoadingBanner from './LoadingBanner'

function ItemDetailContainer(props) {
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    const [itemData, setItemData] = useState({
        name: "-",
        price: "-",
        size: "-",
        color: "-"
    });

    async function getItemData(id) {
        // Esto deberia ser un fetch con el ID del prioducto
        await new Promise(resolve => setTimeout(resolve, 3)).then(
            () => {
                setItemData(FAKE_DETAILS_DB[id]);
                setLoading(false);
            })
    }

    useEffect(() => { getItemData(id) }, []);

    return (
        <div>
            { loading ? <LoadingBanner msg="LOADING DETAILS..." /> :
              <ItemDetail data={itemData} /> }
        </div>
    )
}

export default ItemDetailContainer
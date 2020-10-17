import React, { useEffect, useState } from 'react';
import * as API from './../../api/api';

//Components
import { ProductBox } from '../../components/ProductBox/ProductBox';

//styles
import "./Products.scss";

export interface StateProps {
    loading: boolean;
    food?: API.Hints[],
    error?: string;
}

export const Products = () => {

    const [state, setState] = useState<StateProps>({
        loading: true,
        food: [],
        error: undefined
    })

    useEffect(() => {
        loadFood();
    }, [])

    const loadFood = async () => {
        try {
            const res = await API.getFood()
            setState({
                ...state,
                loading: false,
                food: res.data?.hints
            })
        } catch (error) {
            setState({
                ...state,
                loading: false,
                error: error.message
            })
        }
    }

    return (
        <div className="Products">
            <div className="container">
                <div className="row has_gutter">
                    {
                        state.food?.map((foodItem: API.Hints) => {
                            return (
                                <div className="column-3" key={foodItem.food.foodId}>
                                    <ProductBox
                                        id={foodItem.food.foodId}
                                        title={foodItem.food.label}
                                        price={foodItem.food.category}
                                        image={foodItem.food.image}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

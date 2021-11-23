import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import * as AddressAPI from '../AddressApi';
import BigBlueButton from './styled-components/Button';
import { Save } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import DataGridContainer from './styled-components/DataGridContainer'
import FormStyles from './styled-components/FormStyles';
import PropTypes from 'prop-types';



export default function AddressessAndForm ({ mainView, toggleMainView }) {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const [address, setAddress] = React.useState('');
    const [addresses, setAddresses] = React.useState([]);
    const loading = open && options.length === 0;


    useEffect(() => {
        setAddresses(AddressAPI.getAddressesFromLocalStorage())
    }, [])


    const saveAddress = () => {

        // const addressArray = [...addresses.map((ad,index)=>({...ad, id:index})), { ...address, id: addresses.length }]
        const addressArray = [...addresses, { address, id: addresses.length + 1 }]
        setAddresses([...addressArray]);

        AddressAPI.saveAddressesLocal([...addressArray])
        toggleMainView();
    }

    const handleAddressChange = (value) => {

        AddressAPI.search(value).then((addressesFromApi) => {
            if (addressesFromApi && addressesFromApi.length) {
                setOptions(addressesFromApi.map((address) => ({ title: address })));
            }
        })
    }
    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <>
            {!mainView
                &&
                <FormStyles>


                    <Autocomplete
                        id="asynchronous-demo"
                        filterOptions={(x) => x}
                        sx={{ width: 300 }}
                        open={open}
                        onOpen={() => {
                            setOpen(true);
                        }}
                        onClose={() => {
                            setOpen(false);
                        }}
                        isOptionEqualToValue={(option, value) => option.title === value.title}
                        getOptionLabel={(option) => option.title}
                        options={options}
                        loading={loading}
                        onSelect={(evt) => { setAddress(evt.target.value) }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                onChange={(evt) => {
                                    handleAddressChange(evt.target.value);
                                }}
                                label="Postcode"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {loading ? (
                                                <CircularProgress color="inherit" size={20} />
                                            ) : null}
                                            {params.InputProps.endAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                            />
                        )}
                    />


                    {address && (<> {address}<BigBlueButton onClick={(address) => { setAddress(address.target.value); saveAddress() }}> <Save /></BigBlueButton> </>)}
                </FormStyles>

            }


            {mainView
                &&

                <DataGridContainer>

                    {addresses.length &&
                        <DataGrid
                            columns={[{ field: 'address', width: 600, headerName: "Address" }]}
                            rows={addresses}
                        />
                    }

                    {!addresses.length &&
                        <h2>No addresses stored yet...</h2>
                    }
                </DataGridContainer>
            }


        </>
    );
}

AddressessAndForm.propTypes = {
    mainView: PropTypes.bool,
    toggleMainView: PropTypes.func
};
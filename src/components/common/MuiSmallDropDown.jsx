import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { FormLabel } from '@mui/material'
// import { DownArrowIcon } from '../../assets/Svg/DownArrowIcon'
export default function MuiSmallDropDown({
  label,
  data,
  onChange,
  nullIsAll,
  dropDownValue,
  setDropDownValue,
  disabled,
  ...props
}) {
  const handleChange = (event) => {
    console.log('value changed')
    setDropDownValue(event.target.value)
    // onChange(event);
  }

  const isDisabled = disabled ? true : false

  React.useEffect(() => {
    if (isDisabled && data) {
      setDropDownValue(data[0]?.value)
    }
  }, [isDisabled, data])

  return (
    <div style={{ display: 'flex', alignItems: 'center', ...props }}>
      <FormLabel sx={{ fontSize: '10px' }}>{label}</FormLabel>
      <FormControl
        sx={{
          ml: 0.5,
          minWidth: 50,
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          '& .MuiSelect-root': {
            height: '20px',
          },
          '& .MuiSelect-select': {
            padding: '2.5px 12px',
          },
          '& .MuiSelect-select:focus': {
            backgroundColor: (theme) => theme.palette.grey[100],
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ccc',
            borderWidth: '1px',
          },
          '& .MuiInputBase-root': {
            height: '21px',
          },
          '& fieldset': {
            border: 'none',
          },
        }}
        size='small'
        disabled={isDisabled}
      >
        <Select
          labelId='dropdown-small'
          id='dropdown-small'
          value={dropDownValue ? dropDownValue : ''}
          displayEmpty
          onChange={handleChange}
          disabled={isDisabled}
          sx={{
            padding: '5px',
            '& .css-eghtey-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
              padding: '3px 8px',
            },
          }}
        >
          <MenuItem disabled={true} value='' sx={{ display: 'none' }}>
            Select Option
          </MenuItem>
          {data &&
            data?.map((input, index) => (
              <MenuItem
                key={input?.value}
                sx={{
                  '&:hover': { backgroundColor: `${input?.color} !important` },
                  borderRadius: '3px',
                }}
                value={input?.value}
              >
                {input?.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  )
}

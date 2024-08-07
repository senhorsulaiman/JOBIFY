import { Control } from 'react-hook-form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

  import { Input } from "@/components/ui/input"

  type CustomFormFeildProps={
    name:string;
    control:Control<any>;

  }

  export function CustomFormFeild({name,control}:CustomFormFeildProps){
    return(

        <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{name}</FormLabel>
            <FormControl>
              <Input placeholder={name} {...field} />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    )
  }

  type CustomFormSelectProps={

    name:string,
    control:Control<any>;
    items:string[];
    labelText?:string;
  }

  export function CustomFormSelect({name,control, items, labelText}:CustomFormSelectProps){

    return(

        <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{labelText || name}</FormLabel>

            <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
  <SelectTrigger >
    <SelectValue placeholder={labelText} />
  </SelectTrigger>
  <SelectContent>

    {items.map((item)=>{
        return(
            <SelectItem  key={item} value={item}>{item}</SelectItem>
        )
    })}


  </SelectContent>
</Select>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    )
}
export default CustomFormSelect;
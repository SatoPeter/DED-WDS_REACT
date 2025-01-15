import 'vanillajs-datepicker/css/datepicker-foundation.css';
import React, { useEffect, useRef, forwardRef } from 'react';
import { DatepickerOptions } from 'vanillajs-datepicker/Datepicker';
import { DateRangePickerOptions } from 'vanillajs-datepicker/DateRangePicker';
import { Datepicker, DateRangePicker } from 'vanillajs-datepicker';
import { Input } from '@src/ui';
import { SvgCalendar } from '@src/assets';

interface DatePickerProps {
  value?: string;
  placeholder?: string;
  isRange?: boolean;
  options?: Partial<DatepickerOptions | DateRangePickerOptions>;
  className?: string;
  onChange?: (date: string) => void;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      value = '',
      placeholder = '',
      isRange,
      options,
      className = '',
      onChange,
    },
    ref
  ) => {
    const datepickerRef = useRef<Datepicker | DateRangePicker | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const divRangeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const inputElement =
        (ref as React.RefObject<HTMLInputElement>)?.current || inputRef.current;

      const divRangeElement =
        (ref as React.RefObject<HTMLDivElement>)?.current ||
        divRangeRef.current;

      if (inputElement && !isRange) {
        datepickerRef.current = new Datepicker(inputElement, {
          ...options,
          container: document.body,
        });

        inputElement.addEventListener('changeDate', (e: any) => {
          if (onChange) {
            onChange(e.target.value);
          }
        });
      }

      if (divRangeElement && isRange) {
        datepickerRef.current = new DateRangePicker(divRangeElement, {
          ...options,
          container: document.body,
        });

        divRangeElement.addEventListener('changeDate', (e: any) => {
          if (onChange) {
            onChange(e.target.value);
          }
        });
      }

      return () => {
        datepickerRef.current?.destroy();
      };
    }, [options, onChange, ref, isRange]);

    return (
      <div style={{ width: '100%' }}>
        {isRange ? (
          <div className="ded-date-pick-range" ref={ref || divRangeRef}>
            <Input
              placeholder="Start Date"
              initValue={value}
              prefix={<SvgCalendar />}
              type="text"
              onChange={() => ({})}
              className={className}
            />
            <Input
              placeholder="End Date"
              initValue={value}
              prefix={<SvgCalendar />}
              type="text"
              onChange={() => ({})}
              className={className}
            />
          </div>
        ) : (
          <Input
            ref={ref || inputRef}
            placeholder={placeholder}
            initValue={value}
            prefix={<SvgCalendar />}
            type="text"
            onChange={() => ({})}
            className={className}
          />
        )}
      </div>
    );
  }
);

export default DatePicker;

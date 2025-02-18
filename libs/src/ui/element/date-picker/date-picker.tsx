import 'vanillajs-datepicker/css/datepicker-foundation.css';
import React, { useEffect, useRef, forwardRef, useState } from 'react';
import { Datepicker, DateRangePicker } from 'vanillajs-datepicker';
import { Input } from '@src/ui';
import { SvgCalendar } from '@src/assets/icons';

interface DatePickerProps {
  value?: string;
  format?: string;
  placeholder?: string;
  isRange?: boolean;
  className?: string;
  onChange?: (date: string) => void;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      value = '',
      format = 'yyyy/mm/dd',
      placeholder = '',
      isRange,
      className = '',
      onChange,
    },
    ref
  ) => {
    const [currValue, setCurrValue] = useState(value);
    const datepickerRef = useRef<Datepicker | DateRangePicker | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const divRangeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setCurrValue(value);
    }, [value]);

    useEffect(() => {
      const inputElement =
        (ref as React.RefObject<HTMLInputElement>)?.current || inputRef.current;

      const divRangeElement =
        (ref as React.RefObject<HTMLDivElement>)?.current ||
        divRangeRef.current;

      const currFormat = (format || 'yyyy/mm/dd').toLocaleLowerCase();

      if (inputElement && !isRange) {
        datepickerRef.current = new Datepicker(inputElement, {
          format: currFormat,
          todayHighlight: true,
          container: document.body,
        });

        inputElement.addEventListener('changeDate', (e: any) => {
          if (onChange) {
            onChange(e.target.value);
            setCurrValue(e.target.value);
          }
        });
      }

      if (divRangeElement && isRange) {
        datepickerRef.current = new DateRangePicker(divRangeElement, {
          format: currFormat,
          todayHighlight: true,
          allowOneSidedRange: true,
          container: document.body,
        });

        divRangeElement.addEventListener('changeDate', (e: any) => {
          if (onChange) {
            onChange(e.target.value);
            setCurrValue(e.target.value);
          }
        });
      }

      return () => {
        datepickerRef.current?.destroy();
      };
    }, [format, onChange, ref, isRange]);

    return (
      <div style={{ width: '100%' }}>
        {isRange ? (
          <div className="ded-date-pick-range" ref={ref || divRangeRef}>
            <Input
              placeholder="Start Date"
              currValue={currValue}
              prefix={<SvgCalendar />}
              type="text"
              onChange={() => ({})}
              className={className}
            />
            <Input
              placeholder="End Date"
              currValue={currValue}
              prefix={<SvgCalendar />}
              type="text"
              onChange={() => ({})}
              className={className}
            />
          </div>
        ) : (
          <>
            <Input
              ref={ref || inputRef}
              placeholder={placeholder}
              currValue={currValue}
              prefix={<SvgCalendar />}
              type="text"
              onChange={() => ({})}
              className={className}
            />
          </>
        )}
      </div>
    );
  }
);

export default DatePicker;

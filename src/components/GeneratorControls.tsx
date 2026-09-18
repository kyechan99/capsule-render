import {
  Button,
  Input,
  InputDesc,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectToggle,
  Switch,
} from "bmates-ui";
import type { ChangeEvent } from "react";
import {
  DESCRIPTION_FIELDS,
  SHAPE_FIELDS,
  TEXT_FIELDS,
} from "../generator/config";
import type { FieldConfig, GeneratorQuery, QueryKey } from "../generator/types";

type GeneratorControlsProps = {
  query: GeneratorQuery;
  typeOptions: readonly string[];
  animationOptions: readonly string[];
  colorPresets: readonly string[];
  onChange: <K extends QueryKey>(key: K, value: GeneratorQuery[K]) => void;
  onReset: () => void;
};

type FieldProps = Pick<GeneratorControlsProps, "query" | "onChange"> & {
  field: FieldConfig;
};

function titleCase(value: string) {
  return value || "None";
}

function GeneratorField({ field, query, onChange }: FieldProps) {
  const value = query[field.key];
  const inputValue = String(value);
  const fieldId = `generator-${field.key}`;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(field.key, event.target.value as never);
  };

  if (field.type === "select" && field.options) {
    return (
      <div className={`field${field.wide ? " field--wide" : ""}`}>
        <Label htmlFor={fieldId}>{field.label}</Label>
        <Select
          value={[
            {
              label: titleCase(inputValue),
              textValue: inputValue,
              value: inputValue,
            },
          ]}
          onValueChange={selection =>
            onChange(field.key, String(selection[0]?.value ?? "") as never)
          }
        >
          <SelectToggle id={fieldId} className="field-select">
            {titleCase(inputValue)}
          </SelectToggle>
          <SelectContent>
            {field.options.map(option => (
              <SelectItem key={option || "none"} value={option}>
                {titleCase(option)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {field.description && <InputDesc>{field.description}</InputDesc>}
      </div>
    );
  }

  if (field.type === "range") {
    return (
      <div className="field field--range">
        <div className="field-label-row">
          <Label htmlFor={fieldId}>{field.label}</Label>
          <output htmlFor={fieldId}>{inputValue}</output>
        </div>
        <Input
          id={fieldId}
          type="range"
          min={field.min}
          max={field.max}
          step="1"
          value={inputValue}
          onChange={handleInputChange}
        />
        {field.description && <InputDesc>{field.description}</InputDesc>}
      </div>
    );
  }

  return (
    <div className={`field${field.wide ? " field--wide" : ""}`}>
      <Label htmlFor={fieldId}>{field.label}</Label>
      <Input
        id={fieldId}
        type={field.type}
        min={field.min}
        max={field.max}
        placeholder={field.placeholder}
        list={field.options?.length ? `${fieldId}-suggestions` : undefined}
        value={inputValue}
        onChange={handleInputChange}
      />
      {field.options?.length ? (
        <datalist id={`${fieldId}-suggestions`}>
          {field.options.map(option => (
            <option key={option} value={option} />
          ))}
        </datalist>
      ) : null}
      {field.description && <InputDesc>{field.description}</InputDesc>}
    </div>
  );
}

function FieldGrid({
  fields,
  query,
  onChange,
}: Pick<FieldProps, "query" | "onChange"> & {
  fields: readonly FieldConfig[];
}) {
  return (
    <div className="field-grid">
      {fields.map(field => (
        <GeneratorField
          key={field.key}
          field={field}
          query={query}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

export function GeneratorControls({
  query,
  typeOptions,
  animationOptions,
  colorPresets,
  onChange,
  onReset,
}: GeneratorControlsProps) {
  const shapeFields = SHAPE_FIELDS.map(field =>
    field.key === "type" ? { ...field, options: typeOptions } : field,
  );
  const textFields = TEXT_FIELDS.map(field =>
    field.key === "animation" ? { ...field, options: animationOptions } : field,
  );
  const resolvedShapeFields = shapeFields.map(field =>
    field.key === "color" ? { ...field, options: colorPresets } : field,
  );

  return (
    <div className="generator-controls">
      <div className="tab-heading">
        <div>
          <h2>Settings</h2>
        </div>
        <Button
          className="reset-button"
          variant="outline"
          size="sm"
          onClick={onReset}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 3-6.7" />
            <path d="M3 4v5h5" />
          </svg>
          Reset all
        </Button>
      </div>

      <section className="setting-section" aria-labelledby="shape-settings">
        <div className="setting-section-heading">
          <span>01</span>
          <div>
            <h3 id="shape-settings">Shape & layout</h3>
          </div>
        </div>
        <FieldGrid
          fields={resolvedShapeFields}
          query={query}
          onChange={onChange}
        />
        <div className="switch-grid">
          <Switch
            checked={query.reversal}
            label="Reverse direction"
            onCheckedChange={checked => onChange("reversal", checked)}
          />
        </div>
      </section>

      <section className="setting-section" aria-labelledby="text-settings">
        <div className="setting-section-heading">
          <span>02</span>
          <div>
            <h3 id="text-settings">Text style</h3>
          </div>
        </div>
        <FieldGrid fields={textFields} query={query} onChange={onChange} />
        <div className="switch-grid">
          <Switch
            checked={query.textBg}
            label="Show text background"
            onCheckedChange={checked => onChange("textBg", checked)}
          />
        </div>
      </section>

      <section
        className="setting-section"
        aria-labelledby="description-settings"
      >
        <div className="setting-section-heading">
          <span>03</span>
          <div>
            <h3 id="description-settings">Description</h3>
          </div>
        </div>
        <FieldGrid
          fields={DESCRIPTION_FIELDS}
          query={query}
          onChange={onChange}
        />
      </section>
    </div>
  );
}

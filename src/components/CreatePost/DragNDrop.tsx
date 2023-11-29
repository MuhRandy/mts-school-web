import clsx from "clsx";
import Dropzone from "react-dropzone";
import { cn } from "../../utils/utils";

type DragNDropProps = {
  file: File | null;
  setFile: (file: File) => void;
  className?: string;
};

const DragNDrop = ({ file, setFile, className }: DragNDropProps) => {
  return (
    <Dropzone onDrop={(acceptedFiles) => setFile(acceptedFiles?.[0])}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <section>
          <div
            {...getRootProps({
              className: cn(
                "h-[200px] flex justify-center items-center border-dashed border-4 cursor-pointer mx-11 my-4",
                className
              ),
            })}
          >
            <input
              {...getInputProps({
                accept: "image/*",
              })}
            />
            {isDragActive ? (
              <p>Drop some files here</p>
            ) : (
              <>
                <p className={clsx("text-center", { hidden: file })}>
                  Drag 'n' drop some images here, or click to select files
                </p>
                {file && (
                  <img
                    src={URL.createObjectURL(file!)}
                    alt="header image for post"
                    className="w-full h-full object-cover object-center"
                  />
                )}
              </>
            )}
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default DragNDrop;

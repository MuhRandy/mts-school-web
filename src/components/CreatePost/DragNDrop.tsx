import clsx from "clsx";
import Dropzone from "react-dropzone";
import { useCreatePostContext } from "../../pages/CreatePost";

const DragNDrop = () => {
  const { file, setFile } = useCreatePostContext();

  return (
    <Dropzone onDrop={(acceptedFiles) => setFile(acceptedFiles?.[0])}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <section>
          <div
            {...getRootProps({
              className:
                "h-[200px] flex justify-center items-center border-dashed border-4 cursor-pointer mx-11 my-4",
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
                    className="w-full h-[200px] object-cover object-center"
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

import os
import shutil

# path = 'F:\\Tai-lieu\\Videos\\Udemy\\Spring & Hibernate for Beginners (includes Spring Boot)'
path = 'F:\\Tai-lieu\\Videos\\Udemy\\Full Stack Java developer - Java + JSP + Restful WS + Spring'
old_path = path
folder_copy = 'D:\\TaiLieu\\Docs\\Note git\\Source\\full-stack-java-developer-java'

files = []
dir = []
name = []
i = 0

print("======== name dir ========")
folders = []
folder_name = []
# r=root, d=directories, f = files
for r, d, f in os.walk(path):
    idx = 0
    for folder in d:
        folders.append(folder)
        print('## {}'.format(folder))
        # create subfolders
        folder_name.append(folder_copy + '/' + folder)
        os.mkdir(folder_name[idx])
        idx = idx + 1

        for r1, d1, f1 in os.walk(os.path.join(r, folder)):
            for file in f1:
                if '.mp4' in file or '.html' in file:
                    print('### {}'.format(file.split('.mp4')[0]))
print("======== list file ========")


# r=root, d=directories, f = files
def copy_func(path):
    for r, d, f in os.walk(path):
        i = -1
        for file in f:
            if file.startswith('1. '):
                i = i+1
            if '.mp4' in file or '.html' in file or '.zip' in file or '.pdf' in file:
                files.append(os.path.join(r, file))
                dir.append(d)
                name.append(file)
                # dir.append(d)
                if '.html' in file or '.zip' in file or '.pdf' in file:
                    root = r
                    root = root.replace(old_path, folder_copy)
                    if not os.stat(os.path.join(r, file)).st_size >= (1024**2):
                        shutil.copy(os.path.join(r, file), root)
                # print('### {}'.format(file.split('.mp4')[0]))

copy_func(path)
# for f in files:
#     print(f)
print("======== file ========")
# for f in name:
#     print(f)


# for f in folders:
#     print('##' + f)


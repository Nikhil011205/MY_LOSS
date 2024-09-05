import pandas as pd
import random
import statistics
from statistics import mode

linux_distros = [
    'ubuntu', 'debian', 'arch', 'mint', 'fedora', 'opensuse', 'kde_plasma', 'kali', 
    'manjaro', 'pop', 'chimera', 'tuxedo', 'parrot', 'elementary', 'endeavour', 
    'garuda', 'gentoo', 'qubes', 'cent', 'tails'
]

 
def most_common(List):
    return(mode(List))
   

distribution_mapping = {dist: idx for idx, dist in enumerate(linux_distros)}

def select_distribution(row):
    use_case, sys_power, knowledge_level, linux_knowledge, user_type, prev_os, live_boot, preinstalled, age, cpu_power, cpu_arch, ram, storage, privacy, community, graphics, gaming, driver_support, app_store, updates = row

    candidates = []

    if use_case == 1:
        candidates.extend([ distribution_mapping['ubuntu'], distribution_mapping['fedora']])
    elif use_case == 2:
        candidates.extend([distribution_mapping['debian'], distribution_mapping['arch'], distribution_mapping['fedora']])
    elif use_case == 3:
        candidates.extend([distribution_mapping['cent'], distribution_mapping['fedora']])
    else:
        candidates.extend([distribution_mapping['ubuntu'], distribution_mapping['manjaro'], distribution_mapping['debian']])

    if sys_power == 1:
        candidates.extend([distribution_mapping['ubuntu'],distribution_mapping['pop']])
    elif sys_power == 2 : 
        candidates.extend([distribution_mapping['pop']])
    elif sys_power == 3 :
        candidates.extend([distribution_mapping['kali'],distribution_mapping['fedora']])
    else : 
        candidates.extend([distribution_mapping['cent'],distribution_mapping['debian']])

    if knowledge_level == 1:
        candidates.extend([distribution_mapping['arch'],distribution_mapping['gentoo'],distribution_mapping['kali']])
    elif knowledge_level == 2 : 
        candidates.extend([distribution_mapping['fedora'],distribution_mapping['mint']])
    elif knowledge_level == 3 :
        candidates.extend([distribution_mapping['pop'],distribution_mapping['manjaro']])
    else : 
        candidates.extend([distribution_mapping['ubuntu'],distribution_mapping['mint'],distribution_mapping['pop']])

    if linux_knowledge == 1:
        candidates.extend([distribution_mapping['arch'], distribution_mapping['gentoo'], distribution_mapping['fedora']])
    elif linux_knowledge == 2:
        candidates.extend([distribution_mapping['debian'], distribution_mapping['manjaro'], distribution_mapping['pop']])
    elif linux_knowledge == 3:
        candidates.extend([distribution_mapping['mint'], distribution_mapping['pop']])
    else:
        candidates.extend([distribution_mapping['mint'], distribution_mapping['pop'], distribution_mapping['ubuntu']])

    if user_type == 1:
        candidates.extend([distribution_mapping['ubuntu'],distribution_mapping['arch'],distribution_mapping['fedora']])
    elif user_type == 2 : 
        candidates.extend([distribution_mapping['cent'],distribution_mapping['fedora'],distribution_mapping['pop']])
    elif user_type == 3 :
        candidates.extend([distribution_mapping['arch'],distribution_mapping['gentoo'],distribution_mapping['debian']])
    else : 
        # candidates.extend([distribution_mapping[''],distribution_mapping[''],distribution_mapping['']])
        pass

    if prev_os == 1:
        candidates.extend([distribution_mapping['arch'],distribution_mapping['tails'],distribution_mapping['kde_plasma']])
    elif prev_os == 2 : 
        candidates.extend([distribution_mapping['elementary'],distribution_mapping['mint'],distribution_mapping['pop']])
    elif prev_os == 3 :
        candidates.extend([distribution_mapping['elementary'],distribution_mapping['pop'],distribution_mapping['manjaro']])
    else : 
        candidates.extend([distribution_mapping['arch'],distribution_mapping['tails'],distribution_mapping['gentoo']])
    

    if live_boot == 1:
        candidates.extend([distribution_mapping['kali'], distribution_mapping['debian'], distribution_mapping['ubuntu']])
    elif live_boot == 2:
        candidates.extend([distribution_mapping['tails'], distribution_mapping['cent']])
    elif live_boot == 3:
        candidates.extend([ distribution_mapping['debian']])
    else:
        candidates.extend([ distribution_mapping['gentoo'],distribution_mapping['endeavour']])

    if preinstalled == 1:
        candidates.extend([distribution_mapping['manjaro'],distribution_mapping['ubuntu'],distribution_mapping['mint']])
    elif preinstalled == 2 : 
        candidates.extend([distribution_mapping['arch'],distribution_mapping['gentoo'],distribution_mapping['debian']])
    elif preinstalled == 3 :
        candidates.extend([distribution_mapping['debian'],distribution_mapping['fedora'],distribution_mapping['mint']])
    else : 
        # candidates.extend([distribution_mapping[''],distribution_mapping[''],distribution_mapping['']])
        pass

    if age == 1:
        candidates.extend([distribution_mapping['fedora']])
    elif age == 2 : 
        candidates.extend([distribution_mapping['debian'],distribution_mapping['mint']])
    elif age == 3 :
        candidates.extend([distribution_mapping['manjaro'],distribution_mapping['kali']])
    else : 
        candidates.extend([distribution_mapping['manjaro'],distribution_mapping['kali']])

    if cpu_power == 1:
        candidates.extend([distribution_mapping['manjaro'],distribution_mapping['kali']])
    elif cpu_power == 2 : 
        candidates.extend([distribution_mapping['manjaro'],distribution_mapping['tails']])
    elif cpu_power == 3 :
        candidates.extend([distribution_mapping['ubuntu'],distribution_mapping['debian']])
    else : 
        # candidates.extend([distribution_mapping[''],distribution_mapping[''],distribution_mapping['']])
        pass

    if cpu_arch == 1:
        candidates.extend([distribution_mapping['kali']])
    elif cpu_arch == 2 : 
        candidates.extend([distribution_mapping['kali']])
    elif cpu_arch == 3 :
        candidates.extend([distribution_mapping['ubuntu'],distribution_mapping['debian']])
    else : 
        # candidates.extend([distribution_mapping[''],distribution_mapping[''],distribution_mapping['']])
        pass

    if ram == 1:
        candidates.extend([distribution_mapping['kali'],distribution_mapping['fedora']])
    elif ram == 2 : 
        candidates.extend([distribution_mapping['fedora'],distribution_mapping['ubuntu'],distribution_mapping['debian']])
    elif ram == 3 :
        candidates.extend([distribution_mapping['cent']])
    else : 
        # candidates.extend([distribution_mapping[''],distribution_mapping[''],distribution_mapping['']])
        pass
    
    if storage == 1:
        candidates.extend([distribution_mapping['fedora'],distribution_mapping['manjaro']])
    elif storage == 2 : 
        candidates.extend([distribution_mapping['manjaro'],distribution_mapping['mint']])
        pass
    elif storage == 3 :
        candidates.extend([distribution_mapping['kde_plasma'],distribution_mapping['arch'],distribution_mapping['ubuntu']])
    else : 
        candidates.extend([distribution_mapping['arch'],distribution_mapping['kde_plasma']])

    if privacy == 1:
        candidates.extend([distribution_mapping['qubes'], distribution_mapping['tails'], distribution_mapping['kali'],distribution_mapping['qubes'],distribution_mapping['qubes']])
    elif privacy == 2:
        # candidates.extend([distribution_mapping['ubuntu'],distribution_mapping['arch']])
        pass
    elif privacy == 3:
        # candidates.extend([distribution_mapping['fedora'], distribution_mapping['debian']])
        pass
    else:
        candidates.extend([distribution_mapping['ubuntu']])

    if community == 1:
        candidates.extend([distribution_mapping['arch'],distribution_mapping['ubuntu'],distribution_mapping['debian']])
    elif community == 2 : 
        candidates.extend([distribution_mapping['pop'],distribution_mapping['kde_plasma'],distribution_mapping['gentoo']])
    elif community == 3 :
        # candidates.extend([distribution_mapping[''],distribution_mapping[''],distribution_mapping['']])
        pass
    else : 
        candidates.extend([distribution_mapping['parrot'],distribution_mapping['endeavour'],distribution_mapping['tuxedo']])

    if graphics == 1:
        candidates.extend([distribution_mapping['fedora'],distribution_mapping['manjaro'],distribution_mapping['arch']])
    elif graphics == 2 : 
        # candidates.extend([distribution_mapping[''],distribution_mapping[''],distribution_mapping['']])
        pass
    elif graphics == 3 :
        # candidates.extend([distribution_mapping['ubuntu'],distribution_mapping['debian']])
        pass
    else : 
        # candidates.extend([distribution_mapping[''],distribution_mapping[''],distribution_mapping['']])
        pass

    if gaming == 1:
        candidates.extend([distribution_mapping['chimera'], distribution_mapping['chimera'], distribution_mapping['chimera'],distribution_mapping['chimera'],distribution_mapping['pop']])
    elif gaming == 2:
        candidates.extend([distribution_mapping['chimera'], distribution_mapping['tuxedo'],distribution_mapping['pop'],distribution_mapping['mint'],distribution_mapping['garuda']])
    elif gaming == 3:
        candidates.extend([distribution_mapping['pop'], distribution_mapping['elementary'],distribution_mapping['mint']])
    else:
        candidates.extend([distribution_mapping['gentoo'],distribution_mapping['endeavour']])

    if driver_support == 1:
        candidates.extend([distribution_mapping['arch'],distribution_mapping['garuda'],distribution_mapping['debian']])
    elif driver_support == 2 : 
        candidates.extend([distribution_mapping['tuxedo'],distribution_mapping['tuxedo'],distribution_mapping['fedora'],distribution_mapping['pop']])
    elif driver_support == 3 :
        candidates.extend([distribution_mapping['pop'],distribution_mapping['kde_plasma'],distribution_mapping['garuda']])
    else : 
        # candidates.extend([distribution_mapping[''],distribution_mapping[''],distribution_mapping['']])
        pass
    
    if app_store == 1:
        candidates.extend([distribution_mapping['ubuntu'],distribution_mapping['mint'],distribution_mapping['pop']])
    elif app_store == 2 : 
        candidates.extend([distribution_mapping['arch'],distribution_mapping['debian'],distribution_mapping['gentoo']])
    elif app_store == 3 :
        candidates.extend([distribution_mapping['arch'],distribution_mapping['mint'],distribution_mapping['pop']])
    else : 
        candidates.extend([distribution_mapping['arch'],distribution_mapping['endeavour'],distribution_mapping['garuda']])

    if updates == 1:
        candidates.extend([distribution_mapping['arch'],distribution_mapping['garuda'],distribution_mapping['manjaro']])
    elif updates == 2 : 
        candidates.extend([distribution_mapping['debian'],distribution_mapping['cent']])
    elif updates == 3 :
        candidates.extend([distribution_mapping['ubuntu'],distribution_mapping['debian'],distribution_mapping['endeavour']])
    else : 
        # candidates.extend([distribution_mapping[''],distribution_mapping[''],distribution_mapping['']])
        pass
    
    # print(candidates)
    # first = linux_distros[most_common(candidates)]
    # first_num = most_common(candidates)
    # new_candi = []
    # for i in candidates : 
    #     if(i != first_num) : 
    #         new_candi.append(i)
    # second = linux_distros[most_common(new_candi)]
    # second_num = most_common(new_candi)
    # new_candi2 = []
    # for i in new_candi : 
    #     if(i != second_num) : 
    #         new_candi2.append(i)
    # third = linux_distros[most_common(new_candi2)]

    # print(f"{first}, {second}, {third}")


# update to csv in a vector, output vectorize in neural
# update to csv in a vector, output vectorize in neural
# update to csv in a vector, output vectorize in neural
# update to csv in a vector, output vectorize in neural
# update to csv in a vector, output vectorize in neural
# update to csv in a vector, output vectorize in neural


    # if candidates:
    return most_common(candidates)
    # return random.choice(list(distribution_mapping.values())) 


data = []
for i in range(100000):
    row = [random.randint(1, 4) for _ in range(20)]
    best_linux_distribution = select_distribution(row) 
    row.append(best_linux_distribution)
    data.append(row)

# Create dataframe
df = pd.DataFrame(data, columns=[f"Q{i}" for i in range(20)] + ["goat linux"])

# Save to CSV
df.to_csv('synthetic_linux_data.csv', index=False)

print("saved")

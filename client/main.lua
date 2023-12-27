while GetResourceState('qs-smartphone-pro') ~= 'started' do
    Wait(500)
end

local ui = 'https://cfx-nui-' .. GetCurrentResourceName() .. '/ui/build/'

RegisterNUICallback('foo', function(data, cb)
    print('foo called', json.encode(data, { indent = true }))
end)

RegisterCommand('test', function()
    SendNUIMessage({
        action = 'foo',
        data = 'damn'
    })
end, false)

local function addApp()
    local added = exports['qs-smartphone-pro']:addCustomApp({
        app = 'motel',
        image = ui .. 'assets/icon.png',
        ui = ui .. 'index.html',
        label = 'Motapp',
        job = false,
        blockedJobs = {},
        timeout = 5000,
        creator = 'MX',
        category = 'social',
        isGame = false,
        description = 'Hmm Nice App',
        age = '16+',
        extraDescription = {
            {
                header = 'WTFHUH',
                head = 'HMM BEST APP',
                image = 'https://media.istockphoto.com/photos/abstract-background-wallpaper-picture-id952039286?b=1&k=20&m=952039286&s=170667a&w=0&h=LmOcMt7FHxFUAr2bOSfTUPV9sQhME6ABtAYLM0cMkR4=',
                footer = 'WOW'
            }
        }
    })
    if not added then
        return print('Failed to add app')
    end
    print('App added')
end

local function removeApp()
    local removed = exports['qs-smartphone-pro']:removeCustomApp('template')
    if not removed then
        return print('Failed to remove app')
    end
    print('App removed')
end

RegisterCommand('removeapp', function()
    removeApp()
end, false)

CreateThread(addApp)

AddEventHandler('onResourceStart', function(resource)
    if resource == 'qs-smartphone-pro' then
        addApp()
    end
end)
